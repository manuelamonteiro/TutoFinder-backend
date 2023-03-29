import app, { init } from "../../src/app";
import { faker } from "@faker-js/faker";
import * as jwt from "jsonwebtoken";
import httpStatus from "http-status";
import supertest from "supertest";
import { createUser } from "../factories/users-factory";
import { cleanDb, generateValidToken } from "../helpers";
import { createSubject } from "../factories/subjects-factory";
import { prisma } from "../../src/config/database";

const server = supertest(app);

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await cleanDb();
});

describe("GET /subjects", () => {
    it("should respond with status 401 if no token is given", async () => {
        const response = await server.get("/subjects");

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if given token is not valid", async () => {
        const token = faker.lorem.word();

        const response = await server.get("/subjects").set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if there is no session for given token", async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

        const response = await server.get("/subjects").set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe("when token is valid", () => {
        it("should respond with status 404 when there is no subject", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const response = await server.get("/subjects").set("Authorization", `Bearer ${token}`);

            expect(response.status).toBe(httpStatus.NOT_FOUND);
        });

        it("should respond with status 200 and subject data", async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const subject = await createSubject();
            const response = await server.get("/subjects").set("Authorization", `Bearer ${token}`);

            expect(response.status).toBe(httpStatus.OK);
        });
    });
});