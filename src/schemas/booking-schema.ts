import Joi from "joi";

export const bookingSchema = Joi.object({
    userId: Joi.number().required(),
    tutorId: Joi.number().required()
});