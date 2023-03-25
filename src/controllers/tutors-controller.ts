import { Response, Request } from "express";
import httpStatus from "http-status";
import tutorsService from "../services/tutors-service";

export async function listTutors(req: Request, res: Response) {
    const { subjectId } = req.params;

    try {
        if (!subjectId) {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        const tutors = await tutorsService.getTutorsBySubject(Number(subjectId));
        return res.status(httpStatus.OK).send(tutors);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function listTutorInfo(req: Request, res: Response) {
    const { tutorId } = req.params;

    try {
        if (!tutorId) {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        const tutor = await tutorsService.getTutorById(Number(tutorId));
        return res.status(httpStatus.OK).send(tutor);
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}