const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when passed the boolean true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  test("returns No when passed the boolean false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
  
});
