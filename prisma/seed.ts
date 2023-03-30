import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';

async function main() {
    const hashedPass = await bcrypt.hash("useruser", 12);
    const newUser = await prisma.users.create({
        data: {
            name: "User",
            email: "user2@user.com",
            password: hashedPass,
        },
    });

    const subjects = await prisma.subjects.findMany();
    if (subjects.length === 0) {
        const subjects = [
            {
                name: "Português",
            },
            {
                name: "Matemática",
            },
            {
                name: "Física",
            },
            {
                name: "Química",
            },
            {
                name: "Geografia",
            },
            {
                name: "História",
            },
            {
                name: "Filosofia",
            },
            {
                name: "Sociologia",
            },
            {
                name: "Biologia",
            },
            {
                name: "Artes",
            },
            {
                name: "Música",
            },
            {
                name: "Desenho Técnico",
            }
        ];

        await prisma.subjects.createMany({
            data: subjects
        });
    }

    const tutors = await prisma.tutors.findMany();
    if (tutors.length === 0) {
        const subjects = await prisma.subjects.findMany();

        if (subjects?.length > 0) {
            const tutors = [{
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[0]?.id
            },
            {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[0]?.id
            },
            {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[0]?.id
            },
            {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[0]?.id
            },
            {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[1]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[1]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[2]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[2]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[2]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[2]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[2]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[3]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[4]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[5]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[5]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[6]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[6]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[7]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[9]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[10]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[11]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[11]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[11]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[11]?.id
            }, {
                name: faker.name.firstName(),
                picture: faker.image.imageUrl(),
                pricePerHour: Number(faker.random.numeric(2)),
                description: faker.lorem.paragraph(),
                subjectId: subjects[11]?.id
            }
            ];
            await prisma.tutors.createMany({
                data: tutors,
            });
        }
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });