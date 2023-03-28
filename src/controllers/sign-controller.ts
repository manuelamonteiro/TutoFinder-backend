import { Request, Response } from "express";
import httpStatus from "http-status";

import userService from "../services/sign-service";

type userSignUp = {
    name: string,
    email: string,
    password: string
}

type userSignIn = Omit<userSignUp, "name">


export async function signUp(req: Request, res: Response) {
    const { name, email, password } = req.body as userSignUp;

    try {
        await userService.createUser(name, email, password);
        res.status(httpStatus.CREATED).send({ message: "O usuário foi criado com sucesso!" });
    } catch (error) {
        if (error.name === "BadRequestError") {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body as userSignIn;

    try {
        const result = await userService.login(email, password);
        res.status(httpStatus.OK).send({ token: result });
    } catch (error) {
        if (error.name === "BadRequestError") {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}