const text = "Hola Mundo";

const fruits = ["manzana", "melon", "banana"]

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/)
})


test("¿tenemos una banana?", () => {
  expect(fruits).toContain("banana")
})

test("Mayor que >", () => {
  expect(10).toBeGreaterThan(9)
})

test("Es verdadero?", () => {
  expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
}

test("Probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH")
  })
})