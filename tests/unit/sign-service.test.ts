import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

import userRepository from "../../src/repositories/sign-repository";
import userService from "../../src/services/sign-service";
import { user } from "./unit-factory";
import { badRequestError } from "../../src/errors/bad-request-error";

type JWTPayload = {
    userId: number;
};

describe("sign-in service unit test", () => {
    it("should respond with status 200 and send session token", async () => {
        jest.spyOn(userRepository, "checkEmail").mockImplementationOnce((): any => {
            return {
                ...user,
                password: bcrypt.hashSync(user.password, 10)
            };
        });

        jest.spyOn(userRepository, "createSession").mockImplementationOnce((): any => { });

        const token = await userService.login(user.email, user.password);
        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
        expect(userId).toEqual(user.id);
    });

    it("should respond with status 400 if there is no user for given email", async () => {
        jest.spyOn(userRepository, "checkEmail").mockImplementationOnce((): any => {
            return undefined;
        });

        try {
            await userService.login(user.email, user.password);
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(badRequestError().message);
        }
    });

    it("should respond with status 400 if there is a user for given email but password is not correct", async () => {
        jest.spyOn(userRepository, "checkEmail").mockImplementationOnce((): any => {
            return {
                ...user,
                password: bcrypt.hashSync("banana", 10)
            };
        });

        try {
            await userService.login(user.email, user.password);
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(badRequestError().message);
        }
    });

});

describe("sign-up service unit test", () => {
    it("should respond with status 400 when there is an user with given email", async () => {
        jest.spyOn(userRepository, "checkEmail").mockImplementationOnce((): any => {
            return {
                ...user,
                password: bcrypt.hashSync(user.password, 10)
            };
        });

        try {
            await userService.createUser(user.name, user.email, user.password);
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(badRequestError().message);
        }
    });

    it("should respond with status 201 and create user when given email is unique", async () => {
        jest.spyOn(userRepository, "checkEmail").mockImplementationOnce((): any => {
            return undefined;
        });

        const passwordHash = bcrypt.hashSync(user.password, 10);
        const userCreate = {
            name: user.name,
            email: user.email,
            password: passwordHash
        }
        jest.spyOn(userRepository, "insertUser").mockImplementationOnce((): any => {
            return userCreate;
        });

        expect(userCreate).toEqual(await userService.createUser(user.name, user.email, user.password))
    });
})
