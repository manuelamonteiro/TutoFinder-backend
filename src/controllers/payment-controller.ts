import { Response, Request } from "express";
import httpStatus from "http-status";

import paymentService from "../services/payment-service";

type paymentType = {
    tutorId: number
};

export async function paymentProcess(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const { tutorId } = req.body as paymentType;
    
    try {
        await paymentService.postPayment(Number(userId), Number(tutorId));
        return res.status(httpStatus.CREATED).send({ message: "Pagamento realizado com sucesso!" });
    } catch (error) {
        if (error.name === "BadRequestError") {
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
        
        if(error.name === "UnauthorizedError"){
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    }
}