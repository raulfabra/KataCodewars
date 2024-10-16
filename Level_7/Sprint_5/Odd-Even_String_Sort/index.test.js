import { assert } from "chai";

describe("Other Tests", function () {
  it("Static Ones", function () {
    assert.strictEqual(sortMyString("Wolfeschlegelsteinhausenbergerdorff"), "Wleclgltihuebredrf ofsheesenasnegrof");
    assert.strictEqual(sortMyString("METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL"), "MTINLHENLHENGUAIYAGNL EHOYTROYTROYLTMNLRIY");
    assert.strictEqual(sortMyString("PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS"), "PEMNUTAIRSOISLCVLAOOISS NUOOLRMCOCPCIIOOCNCNOI");
    assert.strictEqual(sortMyString("PSEUDOPSEUDOHYPOPARATHYROIDISM"), "PEDPEDHPPRTYODS SUOSUOYOAAHRIIM");
    assert.strictEqual(sortMyString("FLOCCINAUCINIHILIPILIFICATION"), "FOCNUIIIIIIIAIN LCIACNHLPLFCTO");
    assert.strictEqual(sortMyString("SUBDERMATOGLYPHIC"), "SBEMTGYHC UDRAOLPI");
  });

  function sortMyStringCheck(S) {
    let g1 = "",
      g2 = "",
      c = 0;
    for (let i in S) {
      if (c % 2 === 0) g1 += S[i];
      else g2 += S[i];
      c += 1;
    }
    return g1 + " " + g2;
  }

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function choice(arr) {
    let rand = arr[Math.floor(Math.random() * arr.length)];
    return rand;
  }

  describe("More Complex Ones (random)", function () {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let alph_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digStr = "0123456789";
    let greatSL = alph.concat(alph_).concat(digStr).split("");
    for (let h = 0; h <= 20; h++) {
      let len = randint(10, 50);
      let S = "";
      while (true) {
        let char = choice(greatSL);
        S += char;
        if (S.length == len) break;
      }
      let result = sortMyStringCheck(S).split(" ");
      let evenPredict = result[0],
        oddPredict = result[1];
      let res = sortMyString(S).split(" ");
      let evenExpect = res[0],
        oddExpect = res[1];
      it("Testing for = " + S, function () {
        assert.strictEqual(evenExpect, evenPredict);
        assert.strictEqual(oddExpect, oddPredict);
      });
    }
  });
});
