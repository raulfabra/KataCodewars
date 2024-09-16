const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

/*
function an(ex){
  var st="2";
  for (var i=0;i<ex.length;i++){
    var tmp=ex[i].replace(st,"").replace("-","")
    if (tmp.length==1) st=tmp
  }
  return st;
}
*/

process.reallyExit = bak;

const fcode = function (str) {
  const isChar = function (a) {
    if (a) {
      var code = a.toLowerCase().charCodeAt(0);
      return code >= 97 && code <= 122;
    }
    return false;
  };
  return str
    .replace(/\r?\n|\r/g, "")
    .split("")
    .filter((a, i, x) => {
      return a === " " ? (isChar(x[i - 1]) && isChar(x[i + 1]) ? true : false) : true;
    })
    .join("");
};

function an(str, sp) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) words[i] = words[i].split("").join(sp);
  return words.join(" ");
}

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97);
}
function rndsp() {
  var all = " !#$%&*-+=_,.|".split("");
  return all[~~(all.length * Math.random())];
}

function rnds() {
  var len = ~~(8 * Math.random()) + 3;
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndstr() {
  var len = ~~(15 * Math.random()) + 5;
  for (var i = 0, rs = []; i < len; i++) rs[i] = rnds();
  return rs.join(" ");
}

//console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
//console.log("")

describe("Basic Tests", () => {
  it("Should pass basic tests", () => {
    assert.strictEqual(splitAndMerge("My name is John", " "), "M y n a m e i s J o h n");
    assert.strictEqual(splitAndMerge("My name is John", "-"), "M-y n-a-m-e i-s J-o-h-n");
    assert.strictEqual(splitAndMerge("Hello World!", "."), "H.e.l.l.o W.o.r.l.d.!");
    assert.strictEqual(splitAndMerge("Hello World!", ","), "H,e,l,l,o W,o,r,l,d,!");
  });
});

/*
console.log("<br><font size=4><b>---should coding with 'for in'---</b></font>")
console.log("")
var code=giveMeFive+""
//console.log(code)
var passswitch=/for *\(.* in .*\)/.test(code) ? "Passed":"Your solution should contains keyword \"for in\"";
Test.assertSimilar(passswitch,"Passed");
//anti-cheat and calc the code length
console.log("<br><font size=4><b>--------Code length check --------</b></font>")
var catchcode;
describe("", function() {
  var dump = arguments.callee.caller.caller.caller.toString();
  const FIXED = arguments.callee.caller.caller.toString().length;
  var idx1=dump.indexOf("myjinxin code")+17,
      idx2=dump.indexOf("var Test = global.Test")-";\n ;\n (function () {\n var ".length-1
  catchcode = dump.slice(idx1,idx2)
});
var allcode=catchcode.replace(/\/\/.*?(\n|$)/g,"").replace(/(\n)+/g,"\n"); 
var code=fcode(allcode);
var codelen=code.length, limit=0;
if (codelen<=limit) Test.assertSimilar("code length<="+limit,"code length>"+limit,  "your code length = "+codelen+", please try this code in challage version.\n the simple version only accept the solution which length>"+limit);
else Test.assertSimilar("PASS", "PASS", ";-)");

//end of anti-cheat

console.log("<br><font size=4><b>---should not modify the original array---</b></font>")
console.log("")
for (var myjinxini=0;myjinxini<3;myjinxini++){
  var ee= rndexcel(), ww= ~~(10*Math.random()), oarr="["+ee+"]",
      answer=an(ee,ww), uan=solveIt(ee,ww);
  //Test.assertSimilar(uan, answer);
  Test.assertSimilar("["+ee+"]",oarr);
}
*/
//console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
//console.log("")

describe("Random Tests", () => {
  for (var myjinxini = 0; myjinxini < 100; myjinxini++) {
    var ss = rndstr(),
      pp = rndsp(),
      answer = an(ss, pp);
    //console.log("<font color='#CD7F32'>Test for: str=\""+ss+"\"  sp=\""+pp+"\"</font>","")
    var useran = splitAndMerge(ss, pp);
    it(`Testing for: str=\"${ss}\"  sp=\"${pp}\"`, () => {
      assert.strictEqual(useran, answer);
    });
  }
});

//console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
//console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")
