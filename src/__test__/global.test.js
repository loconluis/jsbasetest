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


const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error("No hay texto"))
    }

    resolve(str.split("").reverse().join(""))
  })
}

test("probar una promesa", () => {
  return reverseString2("Hola")
  .then(str => {
    expect(str).toBe("aloH")
  })
})


test("Probar Async/Await", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH")
})

afterEach(() => {
  console.log("Despues de cada prueba");
})

afterAll(() => {
  console.log("Despues de todas las pruebas");
})

beforeEach(() => {
  console.log("Antes de cada prueba");
})

beforeAll(() => {
  console.log("Antes de Todas las pruebas");
})