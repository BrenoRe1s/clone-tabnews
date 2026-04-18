const calculadora = require("../models/calculadora")

test('Somar', () => { 
  const resultado = calculadora.somar(2,2)
  expect(resultado).toBe(4)
})