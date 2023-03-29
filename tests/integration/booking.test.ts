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
    await cleanDb();
});

const server = supertest(app);

describe("POST /booking", () => {

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