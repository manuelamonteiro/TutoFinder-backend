import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";

import { unauthorizedError } from "../errors/unauthorized-error";
import userRepository from "../repositories/sign-repository";

type JWTPayload = {
    userId: number;
};


export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try {
        if (!token || !authorization) {
            throw unauthorizedError();
        }

        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

        const session = await userRepository.findSession(token);
        if (!session) throw unauthorizedError();

        res.locals.userId = userId;

        next();
    } catch (error) {
        res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
    }
}