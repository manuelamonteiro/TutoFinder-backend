import app, { init } from "../../src/app";
import { faker } from "@faker-js/faker";
import * as jwt from "jsonwebtoken";
import httpStatus from "http-status";
import supertest from "supertest";
import { createUser } from "../factories/users-factory";
import { cleanDb, generateValidToken } from "../helpers";
import { createTutor } from "../factories/tutors-factory";
import { createSubject } from "../factories/subjects-factory";

beforeAll(async () => {
    await init();
    await cleanDb();
});

const server = supertest(app);

describe("GET /tutors", () => {
   

    describe("when token is valid", () => {
        it("should respond with status 404 when there are no tutors", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const response = await server.get("/tutors/1").set("Authorization", `Bearer ${token}`);

            expect(response.status).toBe(httpStatus.NOT_FOUND);
        });

        it("should respond with status 200", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const subject = await createSubject();
            await createTutor(subject.id);
            const response = await server.get(`/tutors/${subject.id}`).set("Authorization", `Bearer ${token}`);

            expect(response.status).toBe(httpStatus.OK);
        });
    });
});

describe("GET /tutor", () => {
   

    describe("when token is valid", () => {
        it("should respond with status 404 when there is no tutor", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const response = await server.get("/tutor/1").set("Authorization", `Bearer ${token}`);

            expect(response.status).toBe(httpStatus.NOT_FOUND);
        });

        it("should respond with status 200 and tutor data", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const subject = await createSubject();
            const tutor = await createTutor(subject.id);
            const response = await server.get(`/tutor/${tutor.id}`).set("Authorization", `Bearer ${token}`);

            expect(response.status).toBe(httpStatus.OK);
        });
    });
});

