import { faker } from '@faker-js/faker';
import { subjects } from '@prisma/client';

import { prisma } from "../../src/config/database";

export async function createSubject(params: Partial<subjects> = {}): Promise<subjects> {
    return prisma.subjects.create({
        data: {
            name: faker.name.fullName()
        }
    });
}    