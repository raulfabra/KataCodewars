const { transcribir } = require("./");

describe("Use Cases for transcribir function", () => {
  test("The argument is not correct", () => {
    expect(transcribir(5)).toBe(`Error because the argument its a ${typeof 5}`);
    expect(transcribir({})).toBe(`Error because the argument its a ${typeof {}}`);
    expect(transcribir([])).toBe(`Error because the argument its a ${typeof []}`);
  });
  test("The argument is a empty string", () => {
    expect(transcribir("")).toBe(null);
  });
  test("The argument can only contain complementary characters", () => {
    expect(transcribir("GCGCGTACAA")).toMatch("CGCGCAUGUU");
    expect(transcribir("AATCGTTAGGAAT")).toMatch("UUAGCAAUCCUUA");
    expect(transcribir("AATCGTTHYUKKL")).toMatch("This String can not been Transcribe");
    expect(transcribir("Hola")).toMatch("This String can not been Transcribe");
  });
  test("The complement returns C when the character is G", () => {
    expect(transcribir("G")).toEqual("C");
  });
  test("The complement returns G when the character is C", () => {
    expect(transcribir("C")).toEqual("G");
  });
  test("The complement returns A when the character is T", () => {
    expect(transcribir("T")).toEqual("A");
  });
  test("The complement returns U when the character is A", () => {
    expect(transcribir("A")).toEqual("U");
  });
});
