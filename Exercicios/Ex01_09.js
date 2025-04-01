const prompt = require("prompt-sync")()
let preço = Number(prompt("Qual o preço do produto?"))
let desconto = Number(prompt("Qual o valor do desconto?"))
let valorfinal_ = preço / desconto
valorfinal_ = valorfinal_ * 100
console.log (`O valor final com o desconto é ${valorfinal_}`)