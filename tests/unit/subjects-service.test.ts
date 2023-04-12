import { fail } from "assert";

import { notFoundError } from "../../src/errors/not-found-error";
import subjectsRepository from "../../src/repositories/subjects-repository";
import subjectsService from "../../src/services/subjects-service";
import { subject } from "./unit-factory";


describe("subjects service unit test", () => {
    it("should respond with status 404 when there is no subject", async () => {
        jest.spyOn(subjectsRepository, "findSubjects").mockImplementationOnce((): any => {
            return [];
        });

        try {
            await subjectsService.getSubjects();
            fail("não lançou erro");
        } catch (error) {
            expect(error.message).toEqual(notFoundError().message);
        }
    });

    it("should respond with status 200 and send subject data", async () => {
        jest.spyOn(subjectsRepository, "findSubjects").mockImplementationOnce((): any => {
            return [subject];
        });

        expect(await subjectsService.getSubjects()).toEqual([subject]);
    });
});