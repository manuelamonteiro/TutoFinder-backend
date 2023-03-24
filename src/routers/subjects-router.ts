import { Router } from "express";
import { listSubjects } from "../controllers/subjects-controller";

const subjectsRouter = Router();

subjectsRouter
    .get("/subjects", listSubjects)

export { subjectsRouter };