const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(101, 16)).toBe("I should be there in 6.5 hours.");
    expect(reachDestination(26, 16)).toBe("I should be there in 1.5 hours.");
    expect(reachDestination(50, 23)).toBe("I should be there in 2 hours.");
    expect(reachDestination(9, 10)).toBe("I should be there in 1 hour.");
  });
});
