import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import userRepository from "../repositories/sign-repository";
import { badRequestError } from "../errors/bad-request-error";

async function createUser(name: string, email: string, password: string) {
    const isEmailRegistered = await userRepository.checkEmail(email);
    if (isEmailRegistered) {
        throw badRequestError();
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    await userRepository.insertUser(name, email, passwordHash);
}

async function login(email: string, password: string) {
    const user = await userRepository.checkEmail(email);
    if (!user) {
        throw badRequestError();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw badRequestError();
    }

    //expire: const config = { expiresIn: 60 * 60 * 24 }
    const userId = user.id;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await userRepository.createSession(Number(userId), token);

    return token;
}

const userService = {
    createUser,
    login
}

export default userService;
