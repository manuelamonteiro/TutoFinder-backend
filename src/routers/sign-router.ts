import { Router } from "express";
import { signUp, signIn } from "../controllers/sign-controller";
import { validateSchema } from "../middlewares/validation-middleware";
import { signInSchema, userSchema } from "../schemas/sign-schema";

const userRouter = Router();

userRouter
    .post("/sign-up", validateSchema(userSchema), signUp)
    .post("/sign-in", validateSchema(signInSchema), signIn)

export { userRouter };