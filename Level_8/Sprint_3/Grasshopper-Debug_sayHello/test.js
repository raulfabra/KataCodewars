const { assert } = require("chai");

describe("say hello", () => {
  function dotest(input, expected) {
    assert.strictEqual(sayHello(input), expected, `Incorrect answer for name='${input}'`);
  }

  it("fixed tests", () => {
    dotest("Mr. Spock", "Hello, Mr. Spock");
    dotest("Captain Kirk", "Hello, Captain Kirk");
    dotest("Liutenant Uhura", "Hello, Liutenant Uhura");
    dotest("Dr. McCoy", "Hello, Dr. McCoy");
  });
  it("random tests", () => {
    const solution = (name) => "Hello, " + name;
    let alph = "abcdefghijklmnopqrstuvwxyz";
    const createName = (length) =>
      Array.from({ length: length }, () => {
        let idx = Math.floor(Math.random() * 25) + 1;
        return alph[idx];
      }).join("");
    for (let i = 0; i < 50; i++) {
      let length = Math.floor(Math.random() * 10) + 1;
      let name = createName(length);
      dotest(name, solution(name));
    }
  });
});
