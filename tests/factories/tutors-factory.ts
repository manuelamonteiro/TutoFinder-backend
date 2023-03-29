import { faker } from '@faker-js/faker';
import { tutors } from '@prisma/client';

import { prisma } from "../../src/config/database";

export async function createTutor(subjectId: number): Promise<tutors> {
    return prisma.tutors.create({
        data: {
            name: faker.name.fullName(),
            pricePerHour: 100,
            picture: faker.image.avatar(),
            description: faker.lorem.paragraph(),
            subjectId: subjectId
        }
    });
}