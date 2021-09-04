const { station, readingOutsideRange, NumberRange } = require("./example2");

describe("6장 객체 매개변수화 하기", () => {
  it("readingOutsideRange filter", () => {
    expect(readingOutsideRange(station, new NumberRange(50, 55))).toEqual([
      {
        temp: 47,
        time: "2016­11­10 09:20",
      },
      {
        temp: 58,
        time: "2016­11­10 09:40",
      },
    ]);
  });
});
