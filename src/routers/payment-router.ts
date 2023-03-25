import { Router } from "express";
import { paymentProcess } from "../controllers/payment-controller";

const paymentRouter = Router();

paymentRouter
    .post("/payment", paymentProcess)

export { paymentRouter };