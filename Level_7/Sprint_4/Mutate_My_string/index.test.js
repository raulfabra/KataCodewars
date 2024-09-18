describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(mutateMyStrings("bubble gum", "turtle ham"), "bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n");
  });
});
