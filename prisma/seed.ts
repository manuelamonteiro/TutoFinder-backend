import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function main() {
    const hashedPass = await bcrypt.hash("useruser", 12);
    const newUser = await prisma.users.create({
        data: {
            name: "User",
            email: "user@user.com",
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
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[0]?.id
            },
            {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[0]?.id
            },
            {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[0]?.id
            },
            {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[0]?.id
            },
            {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[1]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[1]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[2]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[2]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[2]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[2]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[2]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[3]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[4]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[5]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[5]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[6]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[6]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[7]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[9]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[10]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[11]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[11]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[11]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
                subjectId: subjects[11]?.id
            }, {
                name: "Jungkook",
                picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
                pricePerHour: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex.",
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