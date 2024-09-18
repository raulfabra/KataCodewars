const Test = require("@codewars/test-compat");

describe("Example test cases", function () {
  it("should return speed in mph", function () {
    Test.assertEquals(calculateSpeed("100m", "10s"), "22mph");
    Test.assertEquals(calculateSpeed("3km", "5min"), "22mph");
    Test.assertEquals(calculateSpeed("35m", "293s"), "0mph");
    Test.assertEquals(calculateSpeed("573km", "39min"), "548mph");
  });
});
