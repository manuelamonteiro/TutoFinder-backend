import tutorsRepository from "../repositories/tutors-repository";
import { notFoundError } from "../errors/not-found-error";

async function getTutorById(tutorId: number) {
  const tutor = await tutorsRepository.findTutorById(tutorId);
  if (!tutor) {
    throw notFoundError();
  }

  return tutor;
}

async function getTutorsBySubject(subjectId: number) {
  const tutors = await tutorsRepository.findTutorsBySubject(subjectId);
  if (tutors.length === 0) {
    throw notFoundError();
  }

  return tutors;
}

const tutorsService = {
  getTutorById,
  getTutorsBySubject
}

export default tutorsService;