const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");


describe("Convert human years to cat & dog equivalents", () => {
    it("returns array of human, cat and dog years when passed human years", () => {
        expect(humanCatDogYears(10)).toStrictEqual([ 10, 56, 64 ]);
        expect(humanCatDogYears(0)).toStrictEqual([ 0, 0, 0 ]);
        expect(humanCatDogYears(1)).toStrictEqual([ 1, 15, 15 ]);
        expect(humanCatDogYears(2)).toStrictEqual([ 2, 24, 24 ]);
        expect(humanCatDogYears(3)).toStrictEqual([ 3, 28, 29 ]);
        expect(humanCatDogYears(54)).toStrictEqual([ 54, 232, 284 ]);
    });

    it("returns an error when the value passed in isn't a non-negative integer", () => {
        expect(humanCatDogYears("brocolli")).toBe("Error. Needs to be a non-negative integer");
        expect(humanCatDogYears("12345")).toBe("Error. Needs to be a non-negative integer");
        expect(humanCatDogYears(-10)).toBe("Error. Needs to be a non-negative integer");
    });
});