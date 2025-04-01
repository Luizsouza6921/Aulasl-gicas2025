const prompt = require("prompt-sync")()
let diasAlugados = parseInt(prompt("Por quantos dias o carro foi alugado?"))
let kmPercorridos = parseFloat(prompt("Quantos kms foram percorridos pelo carro?"))
let totalDeKm = kmPercorridos * 0.15
let valorFinal = diasAlugados * 60
valorFinal = valorFinal + totalDeKm
console.log (`O valor total é ${valorFinal} reais`)