const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(areaOrPerimeter(3, 3), 9);
    assert.strictEqual(areaOrPerimeter(6, 10), 32);
  });
});
