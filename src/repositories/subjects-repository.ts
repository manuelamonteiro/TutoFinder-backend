import { prisma } from "../config/database";

export async function findSubjects() {
    return prisma.subjects.findMany();
}

const subjectsRepository = {
    findSubjects
};

export default subjectsRepository;