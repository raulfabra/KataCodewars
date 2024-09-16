const Test = require("@codewars/test-compat");

(() => {
  let _ranN = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
  let _ranS = (a, b, c, d, e, f) => {
    let g = (1 / a) * c;
    let h = (1 / b) * d;
    f += 273.15;
    let i = 0.082;
    let j = (g * i * f) / e;
    let k = (h * i * f) / e;
    return j + k;
  };
  describe("Tests", () => {
    it("Fixed tests", () => {
      Test.assertApproxEquals(solution(44, 30, 3, 2, 5, 50), 0.7146511212121212);
      Test.assertApproxEquals(solution(60, 20, 10, 30, 10, 100), 5.099716666666667);
    });
    it("Random tests", () => {
      for (let i = 0; i < 100; i++) {
        let a = [_ranN(2, 300), _ranN(2, 300), _ranN(1, 500), _ranN(1, 500), _ranN(2, 100), _ranN(-30, 200)];
        let b = a.slice();
        let c = _ranS(...b);
        Test.assertApproxEquals(solution(...a), c);
      }
    });
  });
})();
