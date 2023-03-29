import * as jwt from "jsonwebtoken";
import { users } from "@prisma/client";

import { createUser } from "./factories/users-factory";
import { createSession } from "./factories/sessions-factory";
import { prisma } from "../src/config/database";

export async function cleanDb() {
    await prisma.booking.deleteMany({});
    await prisma.tutors.deleteMany({});
    await prisma.subjects.deleteMany({});
    await prisma.sessions.deleteMany({});
    await prisma.users.deleteMany({});
}

export async function generateValidToken(user?: users) {
    const incomingUser = user || (await createUser());
    const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

    await createSession(token);

    return token;
}