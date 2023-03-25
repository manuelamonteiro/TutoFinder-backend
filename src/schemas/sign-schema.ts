import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().required().min(4).max(50),
    password: Joi.string().required().min(4),
    confirmPassword: Joi.ref("password"),
    email: Joi.string().email().required().min(4)
});

export const signInSchema = Joi.object({
    email: Joi.string().email().required().min(4),
    password: Joi.string().required()
});