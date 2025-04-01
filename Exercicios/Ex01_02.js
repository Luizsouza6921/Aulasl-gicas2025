const prompt = require("prompt-sync")()
let numero1 = parseInt(prompt("qual o numero que você quer?"))
let ant = numero1 - 1
let suc = numero1 + 1
console.log (`o seu antecessor é ${ant}, já o seu sucessor é ${suc}`)