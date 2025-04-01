const prompt = require("prompt-sync")()
let dinheiroReais = Number(prompt("Quantos reais você tem na conta?"))
let dinheiroEmDolar = dinheiroReais / 5.79
console.log (`Você tem ${dinheiroEmDolar} dolares`)