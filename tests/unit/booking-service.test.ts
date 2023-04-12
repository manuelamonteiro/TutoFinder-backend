import { badRequestError } from "../../src/errors/bad-request-error";
import bookingRepository from "../../src/repositories/booking-repository";
import tutorsRepository from "../../src/repositories/tutors-repository";
import bookingService from "../../src/services/booking-service";
import { user, tutor, booking } from "./unit-factory";


describe("booking service unit test", () => {
    it("should respond with status 400 when there is no tutor with the given id", async () => {
        jest.spyOn(tutorsRepository, "findTutorById").mockImplementationOnce((): any => {
            return undefined;
        });

        try {
            await bookingService.postBooking(user.id, tutor.id);
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(badRequestError().message);
        }
    });

    it("should respond with status 400 when already has a booking", async () => {
        jest.spyOn(tutorsRepository, "findTutorById").mockImplementationOnce((): any => {
            return tutor;
        });

        jest.spyOn(bookingRepository, "findBooking").mockImplementationOnce((): any => {
            return booking;
        });

        try {
            await bookingService.postBooking(user.id, tutor.id);
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(badRequestError().message);
        }
    });

    it("should respond with status 200 and send booking", async () => {
        jest.spyOn(tutorsRepository, "findTutorById").mockImplementationOnce((): any => {
            return tutor;
        });

        jest.spyOn(bookingRepository, "findBooking").mockImplementationOnce((): any => {
            return undefined;
        });

        jest.spyOn(bookingRepository, "createBooking").mockImplementationOnce((): any => {
            return booking;
        });

        expect(booking).toEqual(await bookingService.postBooking(user.id, tutor.id));
    });
});