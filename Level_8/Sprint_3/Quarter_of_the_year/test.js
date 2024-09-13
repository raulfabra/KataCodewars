const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it(`Month ${3} = quarter 1`, function () {
    assert.strictEqual(quarterOf(3), 1);
  });
  it(`Month ${8} = quarter 3`, function () {
    assert.strictEqual(quarterOf(8), 3);
  });
  it(`Month ${11} = quarter 4`, function () {
    assert.strictEqual(quarterOf(11), 4);
  });
});

describe("Random Tests", () => {
  const quarterOfCheck = (month) => Math.ceil(month / 3);

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      const rnd = Math.floor(Math.random() * 12 + 1);
      assert.strictEqual(quarterOf(rnd), quarterOfCheck(rnd), `Month ${rnd} = quarter ${quarterOfCheck(rnd)}`);
    }
  });
});
