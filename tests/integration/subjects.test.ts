import app, { init } from "../../src/app";
import { faker } from "@faker-js/faker";
import * as jwt from "jsonwebtoken";
import httpStatus from "http-status";
import supertest from "supertest";
import { createUser } from "../factories/users-factory";
import { cleanDb, generateValidToken } from "../helpers";
import { createSubject } from "../factories/subjects-factory";

beforeAll(async () => {
    await init();
    await cleanDb();
});

const server = supertest(app);

describe("GET /subjects", () => {

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