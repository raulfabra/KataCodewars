const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(capitalizeWord("word"), "Word");
    Test.assertEquals(capitalizeWord("i"), "I");
    Test.assertEquals(capitalizeWord("glasswear"), "Glasswear");

    // random tests

    function randInt(a, b) {
      return (Math.random() * (b - a + 1) + a) | 0;
    }

    for (let i = 0; i < 25; i++) {
      let randomString = "";
      for (let i = 1; i <= randInt(1, 10); i++) {
        randomString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }

      Test.assertEquals(capitalizeWord(randomString), randomString[0].toUpperCase() + randomString.slice(1));
    }
  });
});
