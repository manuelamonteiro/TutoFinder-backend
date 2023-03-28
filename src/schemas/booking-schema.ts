import Joi from "joi";

export const bookingSchema = Joi.object({
    tutorId: Joi.number().required()
});