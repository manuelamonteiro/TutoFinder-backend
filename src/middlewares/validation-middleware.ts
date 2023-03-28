import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";


export function validateSchema(body: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {

        const validationStatus = body.validate(req.body, { abortEarly: false });

        if (validationStatus.error) {
            const error = validationStatus.error.details.map((detail: any) => detail.message);
            return res.status(httpStatus.BAD_REQUEST).send(error);
        };

        next();
    }
}