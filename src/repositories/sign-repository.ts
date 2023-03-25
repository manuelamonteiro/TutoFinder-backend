import { prisma } from "../config/database";

async function checkEmail(email: string) {
    return prisma.users.findFirst({
        where: {
            email: email
        }
    });
}

async function selectUser(userId: number) {
    return prisma.users.findFirst({
        where: {
            id: userId
        }
    });
}

async function insertUser(name: string, email: string, passwordHash: string) {
    return prisma.users.create({
        data: {
            name: name,
            email: email,
            password: passwordHash
        }
    });
}

async function createSession(userId: number, token: string) {
    return prisma.sessions.create({
        data: {
            userId: userId,
            token: token
        }
    });
}

async function findSession(token: string) {
    return prisma.sessions.findFirst({
        where: {
            token: token
        }
    });
}

const userRepository = {
    checkEmail,
    selectUser,
    insertUser,
    createSession,
    findSession
};

export default userRepository;
