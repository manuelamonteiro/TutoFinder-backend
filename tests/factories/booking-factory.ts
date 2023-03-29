import { booking } from '@prisma/client';

import { prisma } from "../../src/config/database";

export async function createBooking(userId: number, tutorId: number): Promise<booking> {
    return prisma.booking.create({
        data: {
            userId: userId,
            tutorId: tutorId
        }
    });
}