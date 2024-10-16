const Test = require("@codewars/test-compat");

describe("Visitor", () => {
  it("Visit Light", () => {
    let bullet = new TankBullet();
    let light = new Marine();

    light.accept(bullet);

    Test.assertEquals(light.health, 100 - 21);
  });

  it("Visit Armored", () => {
    let bullet = new TankBullet();
    let armored = new Marauder();

    armored.accept(bullet);

    Test.assertEquals(armored.health, 125 - 32);
  });
});
