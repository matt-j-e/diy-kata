const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([ 5, 4, 3, 2, 1 ]);
    expect(numberToReversedDigits(987654321)).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    expect(numberToReversedDigits(101010)).toStrictEqual([0,1,0,1,0,1]);
  });

  test("returns an error when the value passed in isn't a number", () => {
    expect(numberToReversedDigits("brocolli")).toBe("Error. Needs to be a number");
    expect(numberToReversedDigits("12345")).toBe("Error. Needs to be a number");
  });
});
