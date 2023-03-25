import { Router } from "express";
import { paymentProcess } from "../controllers/payment-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { paymentSchema } from "../schemas/payment-schema";

const paymentRouter = Router();

paymentRouter
    .all("/*", authenticateToken)
    .post("/payment", paymentProcess)

export { paymentRouter };