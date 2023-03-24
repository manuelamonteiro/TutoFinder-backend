import { prisma } from "../config/database";


async function findTutorById(tutorId: number) {
    return prisma.tutors.findFirst({
        where: {
            id: tutorId
        }
    });
}

async function findTutorsBySubject(subjectId: number) {
    return prisma.tutors.findMany({
        where: {
            subjectId: subjectId
        }
    });
}

const tutorsRepository = {
    findTutorById,
    findTutorsBySubject
};

export default tutorsRepository;