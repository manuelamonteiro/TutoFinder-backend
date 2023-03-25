import bookingRepository from "../repositories/booking-repository";
import { badRequestError } from "../errors/bad-request-error";
import paymentRepository from "../repositories/payment-repository";
import tutorsRepository from "../repositories/tutors-repository";

async function postPayment(userId: number, tutorId:number){
  const tutorIdTest = await tutorsRepository.findTutorById(tutorId);
  if(!tutorIdTest || !tutorId){
    throw badRequestError();
  }
  
  const booking = await bookingRepository.findBooking(userId, tutorId);
  if(!booking || booking.userId !== userId){
    throw badRequestError();
  }

  const bookingId = booking.id;
  await paymentRepository.createPayment(bookingId);
}

const paymentService = {
    postPayment
  }
  
  export default paymentService;