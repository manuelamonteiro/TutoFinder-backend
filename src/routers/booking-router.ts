import { Router } from "express";
import { bookingProcess } from "../controllers/booking-controller";

const bookingRouter = Router();

bookingRouter
    .post("/booking", bookingProcess);

export { bookingRouter };