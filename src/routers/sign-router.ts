import { Router } from "express";
import { signUp, signIn } from "../controllers/sign-controller";
import { signInSchema, userSchema } from "../schemas/sign-schema";

const userRouter = Router();

userRouter
    .post("/sign-up", signUp)
    .post("/sign-in", signIn)

export { userRouter };