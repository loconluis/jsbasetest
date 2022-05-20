const randomStrings = require("../index");

describe("Index Funcionalidades", () => {
  test("Probar la funcionalidad Random", () => {
    expect(typeof randomStrings()).toBe("string");  
  })

  test("Comprobar que no existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/)
  })
})
