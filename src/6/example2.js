// 객체 매개변수화 하기

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016­11­10 09:20" },
    { temp: 53, time: "2016­11­10 09:30" },
    { temp: 58, time: "2016­11­10 09:40" },
    { temp: 53, time: "2016­11­10 09:50" },
    { temp: 51, time: "2016­11­10 09:10" },
  ],
};

function readingOutsideRange(station, range) {
  return station.readings.filter((r) => range.isOutsideRange(r.temp));
}

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
  isOutsideRange(number) {
    return number < this.min || number > this.max;
  }
}

module.exports = { station, readingOutsideRange, NumberRange };
