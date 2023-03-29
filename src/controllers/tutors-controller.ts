import { Response, Request } from "express";
import httpStatus from "http-status";

import tutorsService from "../services/tutors-service";

export async function listTutors(req: Request, res: Response) {
    const { subjectId } = req.params;

    try {
        const tutors = await tutorsService.getTutorsBySubject(Number(subjectId));
        return res.status(httpStatus.OK).send(tutors);
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        if(error.name === "UnauthorizedError"){
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    }
}

export async function listTutorInfo(req: Request, res: Response) {
    const { tutorId } = req.params;

    try {
        const tutor = await tutorsService.getTutorById(Number(tutorId));
        return res.status(httpStatus.OK).send(tutor);
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        if(error.name === "UnauthorizedError"){
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    }
}