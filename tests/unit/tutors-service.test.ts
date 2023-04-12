import { notFoundError } from "../../src/errors/not-found-error";
import tutorsRepository from "../../src/repositories/tutors-repository";
import tutorsService from "../../src/services/tutors-service";
import { tutor, subject } from "./unit-factory";


describe("tutors service unit test", () => {
    it("not found error", async () => {
        jest.spyOn(tutorsRepository, "findTutorsBySubject").mockImplementationOnce((): any => {
            return [];
        });

        try {
            await tutorsService.getTutorsBySubject(subject.id);
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(notFoundError().message);
        }
    });

    it("status 200", async () => {
        jest.spyOn(tutorsRepository, "findTutorsBySubject").mockImplementationOnce((): any => {
            return [tutor];
        });

        expect(await tutorsService.getTutorsBySubject(subject.id)).toEqual([tutor]);
    });
});

describe("tutor service unit test", () => {
    it("should respond with status 404 when there is no tutor", async () => {
        jest.spyOn(tutorsRepository, "findTutorById").mockImplementationOnce((): any => {
            return undefined;
        });

        try {
            await tutorsService.getTutorById(tutor.id)
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(notFoundError().message);
        }
    });

    it("should respond with status 200 and send tutor data", async () => {
        jest.spyOn(tutorsRepository, "findTutorById").mockImplementationOnce((): any => {
            return tutor;
        });

        expect(await tutorsService.getTutorById(tutor.id)).toEqual(tutor);
    });
});