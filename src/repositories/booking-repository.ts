import { prisma } from "../config/database";

async function createBooking(userId: number, tutorId: number) {
    return prisma.booking.create({
        data: {
            userId: userId,
            tutorId: tutorId
        }
    });
}

async function findBooking(userId: number, tutorId: number) {
    return prisma.booking.findFirst({
        where: {
            userId: userId,
            tutorId: tutorId
        }
    });
}

const bookingRepository = {
    createBooking,
    findBooking
};

export default bookingRepository;