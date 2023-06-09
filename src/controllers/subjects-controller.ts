import { Response, Request } from "express";
import httpStatus from "http-status";

import subjectsService from "../services/subjects-service";

export async function listSubjects(req: Request, res: Response) {
    try {
        const subjects = await subjectsService.getSubjects();
        return res.status(httpStatus.OK).send(subjects);
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        if(error.name === "UnauthorizedError"){
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    }
}