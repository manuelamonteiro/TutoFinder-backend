import { Response, Request } from "express";
import httpStatus from "http-status";
import bookingService from "../services/booking-service";

export async function bookingProcess(req: Request, res: Response) {
    const userId = 1; //const { userId } = req;
    const { tutorId } = req.body;
    try {
        const booking = await bookingService.postBooking(Number(userId), Number(tutorId));
        return res.status(httpStatus.OK).send(booking);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}