import Joi from "joi";

export const paymentSchema = Joi.object({
    bookingId: Joi.number().required(),
    paid: Joi.boolean().required()
});