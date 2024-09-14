const Test = require("@codewars/test-compat");

function an(a, b, c, d) {
  return (b - d) * (a - c + 1);
}

function rndc() {
  let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length * Math.random())];
}
function rndc1() {
  let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/";
  return allc[~~(allc.length * Math.random())];
}
function rndclo() {
  let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length * Math.random())];
}
function rndcn() {
  let allc = "1234567890";
  return allc[~~(allc.length * Math.random())];
}
function rndcl() {
  let allc = "abcdefghijklmnopqrstuvwxyz";
  return allc[~~(allc.length * Math.random())];
}
function rndcno() {
  let allc = "1234567890_ !@#$%^&*_(),.?|{}[]-=+";
  return allc[~~(allc.length * Math.random())];
}
function rndch() {
  let allc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length * Math.random())];
}
function rnd9() {
  let allc = "123456789";
  return allc[~~(allc.length * Math.random())];
}
function rnd10() {
  let allc = "0123456789";
  return allc[~~(allc.length * Math.random())];
}
function rnds(n) {
  let len = n || rand(2, 3);
  for (let i = 0, rs = []; i < len; i++) rs[i] = rndclo();
  return rs.join("");
}
function rndss(n) {
  let len = n || rand(3, 7);
  for (let i = 0, rs = []; i < len; i++) rs[i] = rand(0, 1000) % 2 ? rndcl() : rndch();
  return rs.join("");
}
function rndsss(n) {
  let len = n || rand(5, 15);
  for (let i = 0, rs = []; i < len; i++) rs[i] = rnds();
  return rndch() + rs.join(" ");
}

function shuff(arr) {
  for (let i = 0; i < 50; i++) {
    let idx1 = rand(0, arr.length - 1),
      idx2 = rand(0, arr.length - 1);
    let t = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = t;
  }
}
function rnds2(n) {
  let len = n || ~~(15 * Math.random()) + 4;
  for (let i = 0, rs = []; i < len; i++) rs[i] = rndcl();
  return rs.join("");
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from);
}

let maxlen = 50,
  maxtt = 20;
function rndtest() {
  let r1 = rand(1, 1000),
    r2 = rand(1, 1000),
    r3 = rand(1, r1),
    r4 = rand(1, r2);
  return [r1, r2, r3, r4];
}
function rndname() {
  let len = 3;
  for (let r = rndch(), i = 0; i < len; i++) r += rndcl();
  return r;
}
function rndarr() {
  let len = rand(10, 50),
    r1 = [];
  for (let i = 0; i < len; i++) {
    r1[i] = rand(1, 99);
  }
  return r1;
}
function rndarr2() {
  let len = 100000,
    len1 = len + 1,
    add = 110000,
    r1 = [],
    r2 = [];
  for (let i = 0; i < len; i++) {
    let t = rand(0, 1000) % 4 ? rand(1, len) : rand(len1, add);
    r1[i] = t;
    r2[i] = t;
  }
  return [r1, r2];
}

function showResult(s, color = "00cc00", who = "Your") {
  console.log(
    "<font face='sans-serif' color='#" +
      color +
      "' size=3><b>" +
      who +
      " result is:</b></font><font face='sans-serif' color='#cccc00' size=3>" +
      "\n" +
      s +
      "</font>",
    ""
  );
}

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(seatsInTheater(16, 11, 5, 3), 96);

    Test.assertEquals(seatsInTheater(1, 1, 1, 1), 0);

    Test.assertEquals(seatsInTheater(13, 6, 8, 3), 18);

    Test.assertEquals(seatsInTheater(60, 100, 60, 1), 99);

    Test.assertEquals(seatsInTheater(1000, 1000, 1000, 1000), 0);
  });
});

let failed = 0,
  recfailed = [];

describe("100 Random Tests --- Testing for correctness of solution", function () {
  it("It should works for random tests.", function () {
    for (let iii = 0; iii < 100; iii++) {
      let [eee, fff, ggg, hhh] = rndtest(),
        ans = an(eee, fff, ggg, hhh);
      console.log(
        "<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#cccc00' size=3>" +
          "\nnCols = " +
          JSON.stringify(eee) +
          ",  nRows = " +
          JSON.stringify(fff) +
          ",  col = " +
          JSON.stringify(ggg) +
          ",  row = " +
          JSON.stringify(hhh) +
          "</font>",
        ""
      );
      let useran = seatsInTheater(eee, fff, ggg, hhh);
      if (JSON.stringify(useran) != JSON.stringify(ans)) {
        failed++;
      }
      Test.assertEquals(useran, ans);
    }
  });
});
//console.log(recfailed)
if (!failed) {
  /*describe("Congratulations! You have passed all the tests!", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
}
