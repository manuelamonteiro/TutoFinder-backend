import { Router } from "express";
import { bookingProcess } from "../controllers/booking-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { bookingSchema } from "../schemas/booking-schema";

const bookingRouter = Router();

bookingRouter
    .all("/*", authenticateToken)
    .post("/booking", bookingProcess);

export { bookingRouter };