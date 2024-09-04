describe("Tests", () => {
  it("test", () => {
    Test.expectNoError(main);
    Test.assertEquals(main("take ", "item"), "take item");
    Test.assertEquals(main("use ", "sword"), "use sword");
  });
});
