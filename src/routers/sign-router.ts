import { Router } from "express";
import { signUp, signIn } from "../controllers/sign-controller";

const userRouter = Router();

userRouter
    .post("/sign-up", signUp)
    .post("/sign-in", signIn)

export { userRouter };