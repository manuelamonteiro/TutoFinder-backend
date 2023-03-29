import app, { init } from "../../src/app";
import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import { createUser } from "../factories/users-factory";
import { cleanDb } from "../helpers";

beforeAll(async () => {
    await init();
    await cleanDb();
});

const server = supertest(app);

describe("POST /sign-in", () => {
    it("should respond with status 400 when body is not given", async () => {
        const response = await server.post("/sign-in");
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should respond with status 400 when body is not valid", async () => {
        const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };
        const response = await server.post("/sign-in").send(invalidBody);

        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    describe("when body is valid", () => {
        const generateValidBody = () => ({
            email: faker.internet.email(),
            password: faker.internet.password(6),
        });

        it("should respond with status 400 if there is no user for given email", async () => {
            const body = generateValidBody()
            const response = await server.post("/sign-in").send(body);

            expect(response.status).toBe(httpStatus.BAD_REQUEST);
        });

        it("should respond with status 400 if there is a user for given email but password is not correct", async () => {
            const body = generateValidBody();
            await createUser(body);

            const response = await server.post("/sign-in").send({
                ...body,
                password: faker.lorem.word()
            });

            expect(response.status).toBe(httpStatus.BAD_REQUEST);
        });

        it("should respond with status 200 and send session token", async () => {
            const body = generateValidBody();
            await createUser(body);

            const response = await server.post("/sign-in").send(body);

            expect(response.body).toBeDefined();
            expect(response.status).toBe(httpStatus.OK);
        });
    });
});