import { Router } from "express";
import { bookingProcess } from "../controllers/booking-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateSchema } from "../middlewares/validation-middleware";
import { bookingSchema } from "../schemas/booking-schema";

const bookingRouter = Router();

bookingRouter
    .all("/*", authenticateToken)
    .post("/booking", validateSchema(bookingSchema), bookingProcess);

export { bookingRouter };