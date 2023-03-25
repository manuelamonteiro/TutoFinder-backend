import { Router } from "express";
import { listSubjects } from "../controllers/subjects-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";

const subjectsRouter = Router();

subjectsRouter
    .all("/*", authenticateToken)
    .get("/subjects", listSubjects)

export { subjectsRouter };