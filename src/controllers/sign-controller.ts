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
        const user = await userService.createUser(name, email, password);
        res.status(httpStatus.CREATED).send(user);
    } catch (error) {
        if (error.name === "BadRequestError") {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
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
    }
} 

export async function signInOauth(req: Request, res: Response) {
    const { code } = req.body;

    try {
        const result = await userService.loginOauth(code.toString());
        res.status(httpStatus.OK).send({ token: result });
    } catch (error) {
        if (error.name === "BadRequestError") {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    }
}