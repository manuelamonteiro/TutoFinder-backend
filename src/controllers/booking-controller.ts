import { Response, Request } from "express";
import httpStatus from "http-status";
import bookingService from "../services/booking-service";

export async function bookingProcess(req: Request, res: Response) {
    const userId = 1; //const { userId } = req;
    const { tutorId } = req.body;
    try {
        await bookingService.postBooking(Number(userId), Number(tutorId));
        return res.status(httpStatus.CREATED).send({ message: "Reserva realizada com sucesso!" });
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        if (error.name === "BadRequestError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}