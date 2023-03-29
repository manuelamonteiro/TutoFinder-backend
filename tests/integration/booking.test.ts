import app, { init } from "../../src/app";
import { faker } from "@faker-js/faker";
import * as jwt from "jsonwebtoken";
import httpStatus from "http-status";
import supertest from "supertest";
import { createUser } from "../factories/users-factory";
import { cleanDb, generateValidToken } from "../helpers";
import { createTutor } from "../factories/tutors-factory";
import { createSubject } from "../factories/subjects-factory";
import { createBooking } from "../factories/booking-factory";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await cleanDb();
});

const server = supertest(app);

describe("POST /booking", () => {
    it("should respond with status 401 if no token is given", async () => {
        const response = await server.get("/booking");

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if given token is not valid", async () => {
        const token = faker.lorem.word();

        const response = await server.get("/booking").set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if there is no session for given token", async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

        const response = await server.get("/booking").set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe("when token is valid", () => {
        it("should respond with status 400 when there is no tutor with the given id", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const response = await server.post("/booking").set("Authorization", `Bearer ${token}`).send({ tutorId: 0 });

            expect(response.status).toBe(httpStatus.BAD_REQUEST);
        });

        it("should respond with status 400 when tutorId is not send", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const response = await server.post("/booking").set("Authorization", `Bearer ${token}`).send({});

            expect(response.status).toBe(httpStatus.BAD_REQUEST);
        });

        it("should respond with status 400 when already has a booking", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const subject = await createSubject();
            const tutor = await createTutor(subject.id);
            await createBooking(user.id, tutor.id);

            const response = await server.post("/booking").set("Authorization", `Bearer ${token}`).send({ tutorId: tutor.id });

            expect(response.status).toBe(httpStatus.BAD_REQUEST);
        });

        it("should respond with status 200", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const subject = await createSubject();
            const tutor = await createTutor(subject.id);

            const response = await server.post("/booking").set("Authorization", `Bearer ${token}`).send({ tutorId: tutor.id });

            expect(response.status).toBe(httpStatus.CREATED);
        });
    });
});