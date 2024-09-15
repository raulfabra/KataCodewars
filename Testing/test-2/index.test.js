const { numeroDeCaracteres } = require("./");

describe("Use Cases for numeroDeCaracteres function", () => {
  test("The arguments of function must be String", () => {
    expect(numeroDeCaracteres(55, "hola")).toBe("Error type of parameters");
    expect(numeroDeCaracteres("Hola", { valor: 55 })).toBe("Error type of parameters");
    expect(numeroDeCaracteres(["Hola", "mucho", "poco"], "a")).toBe("Error type of parameters");
    expect(numeroDeCaracteres("Adios", [])).toBe("Error type of parameters");
  });
  test("If the string of arguments is empty, must be returns false", () => {
    expect(numeroDeCaracteres("", "e")).toBe(false);
  });
  test("The arguments only accept alphabetic character", () => {
    expect(numeroDeCaracteres("Mi nombre es Paco", "55")).toBe(false);
    expect(numeroDeCaracteres("Mi nombr€ es P4aco", "A")).toBe(false);
  });
  test("Must be take account uppercase and lowercase chars", () => {
    expect(numeroDeCaracteres("Mi nombre es Paco", "m")).toEqual(1);
    expect(numeroDeCaracteres("Mi nombre es Mariana", "M")).toEqual(2);
  });
  test("The output of the function should be a number", () => {
    expect(numeroDeCaracteres("Hoy hemos jugado un buen partido", "a")).toEqual(2);
  });
});
