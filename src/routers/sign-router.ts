import { Router } from "express";
import { signUp, signIn, signInOauth } from "../controllers/sign-controller";
import { validateSchema } from "../middlewares/validation-middleware";
import { signInSchema, userSchema } from "../schemas/sign-schema";

const userRouter = Router();

userRouter
    .post("/sign-up", validateSchema(userSchema), signUp)
    .post("/sign-in-oauth", signInOauth)
    .post("/sign-in", validateSchema(signInSchema), signIn)

export { userRouter };