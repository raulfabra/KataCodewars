const Test = require("@codewars/test-compat");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function () {
  it("noBoringZeros", function () {
    assert.strictEqual(noBoringZeros(1450), 145);
    assert.strictEqual(noBoringZeros(960000), 96);
    assert.strictEqual(noBoringZeros(1050), 105);
    assert.strictEqual(noBoringZeros(-1050), -105);
    assert.strictEqual(noBoringZeros(-105), -105);
    assert.strictEqual(noBoringZeros(0), 0);
  });
});

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function noBoringZeros1322(n) {
    if (n === 0) return 0;
    while (n % 10 == 0) {
      n = n / 10;
    }
    return n;
  }

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      let k = randint(100, 10000);
      assert.strictEqual(noBoringZeros(1000 * k), noBoringZeros1322(1000 * k));
      assert.strictEqual(noBoringZeros(-1000 * k), noBoringZeros1322(-1000 * k));
      assert.strictEqual(noBoringZeros(2 * k), noBoringZeros1322(2 * k));
      assert.strictEqual(noBoringZeros(-k), noBoringZeros1322(-k));
    }
  });
});
