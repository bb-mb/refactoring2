const { Producer } = require("./producer");
const { Province } = require("./province");
const { sampleProvinceData } = require("./main");

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(asia.shortfall, 5);
  });
});
