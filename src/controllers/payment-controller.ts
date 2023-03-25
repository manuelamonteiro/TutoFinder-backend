import { Response, Request } from "express";
import httpStatus from "http-status";

import paymentService from "../services/payment-service";

export async function paymentProcess(req: Request, res: Response) {
    const userId = res.locals.userId;
    const { tutorId } = req.body;
    try {
        await paymentService.postPayment(Number(userId), Number(tutorId));
        return res.status(httpStatus.CREATED).send({ message: "Pagamento realizado com sucesso!" });
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }

        if (error.name === "BadRequestError") {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}