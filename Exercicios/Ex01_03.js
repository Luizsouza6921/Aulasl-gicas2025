const prompt = require("prompt-sync")()
let numero1 = Number(prompt("Qual o numero desejado?"))
let dobro = numero1 * 2
let triplo = numero1 * 3
let cubo = numero1 ** 3
console.log (`O dobro do seu numero ${dobro}, o triplo é ${triplo}, já o cubo é ${cubo}`)