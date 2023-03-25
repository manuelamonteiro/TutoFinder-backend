import { Response, Request } from "express";
import httpStatus from "http-status";
import paymentService from "../services/payment-service";

export async function paymentProcess(req: Request, res: Response) {
    const userId = 1; //const { userId } = req;
    const { tutorId } = req.body;
    try {
        const payment = await paymentService.postPayment(Number(userId), Number(tutorId));
        return res.status(httpStatus.OK).send(payment);
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