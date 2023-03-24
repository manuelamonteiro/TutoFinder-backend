import { Router } from "express";
import { listTutorInfo, listTutors } from "../controllers/tutors-controller";

const tutorsRouter = Router();

tutorsRouter
    .get("/tutors/:subjectId", listTutors)
    .get("/tutor/:tutorId", listTutorInfo)

export { tutorsRouter };