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

describe("POST /sign-up", () => {
    it("should respond with status 400 when body is not given", async () => {
        const response = await server.post("/sign-up");
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should respond with status 400 when body is not valid", async () => {
        const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };
        const response = await server.post("/sign-up").send(invalidBody);

        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    describe("when body is valid", () => {
        const generateValidBody = () => ({
            name: faker.name.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(6),
        });

        it("should respond with status 400 when there is an user with given email", async () => {
            const body = generateValidBody()
            await createUser(body);

            const response = await server.post("/sign-up").send(body);

            expect(response.status).toBe(httpStatus.BAD_REQUEST);
        });

        it("should respond with status 201 and create user when given email is unique", async () => {
            const body = generateValidBody();
            const response = await server.post("/sign-up").send(body);

            expect(response.status).toBe(httpStatus.CREATED);
        });
    });
});