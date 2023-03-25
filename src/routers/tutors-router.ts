import { Router } from "express";
import { listTutorInfo, listTutors } from "../controllers/tutors-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";

const tutorsRouter = Router();

tutorsRouter
    .all("/*", authenticateToken)
    .get("/tutors/:subjectId", listTutors)
    .get("/tutor/:tutorId", listTutorInfo)

export { tutorsRouter };