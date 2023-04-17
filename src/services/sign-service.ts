import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import axios from "axios";
import qs from "qs";

import userRepository from "../repositories/sign-repository";
import { badRequestError } from "../errors/bad-request-error";

async function createUser(name: string, email: string, password: string) {
    const user = await userRepository.checkEmail(email);
    if (user) {
        throw badRequestError();
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const createUser = await userRepository.insertUser(name, email, passwordHash);

    return createUser;
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

async function loginOauth(code: string) {
    const tokenGit = await exchangeCodeForAccessToken(code);

    const user = await fetchUser(tokenGit);
    const isUser = await userRepository.checkEmail(user.email);

    if (isUser) {
        const userId = isUser.id;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET);
        await userRepository.createSession(Number(userId), token);
        return token;
    } else {
        const passwordHash = bcrypt.hashSync("passFake", 10);
        const createUser = await userRepository.insertUser(user.name, user.email, passwordHash);
        const userId = createUser.id;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET);
        await userRepository.createSession(Number(userId), token);
        return token;
    }
}

async function exchangeCodeForAccessToken(code: string) {
    const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';

    const params = {
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.REDIRECT_URL,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
    };

    const { data } = await axios.post(GITHUB_ACCESS_TOKEN_URL, params, {
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const parsedData = qs.parse(data);
    return parsedData.access_token;
}

async function fetchUser(token: any) {
    const response = await axios.get("https://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

const userService = {
    createUser,
    login,
    loginOauth
}

export default userService;
