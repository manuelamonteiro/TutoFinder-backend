import bookingRepository from "../repositories/booking-repository";
import { badRequestError } from "../errors/bad-request-error";
import tutorsRepository from "../repositories/tutors-repository";

async function postBooking(userId: number, tutorId:number){
    const tutorIdTest = await tutorsRepository.findTutorById(tutorId);
    if(!tutorIdTest || !tutorId){
      throw badRequestError();
    }

    await bookingRepository.createBooking(userId, tutorId);
}

const bookingService = {
    postBooking
  }
  
  export default bookingService;