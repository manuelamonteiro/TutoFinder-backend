import subjectsRepository from "../repositories/subjects-repository";
import { notFoundError } from "../errors/not-found-error";

async function getSubjects() {
    const subjects = await subjectsRepository.findSubjects();
    if (!subjects) {
        throw notFoundError();
    }

    return subjects;
}

const subjectsService = {
    getSubjects
}

export default subjectsService;