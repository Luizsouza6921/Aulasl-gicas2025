const prompt = require("prompt-sync")()
let altura = parseFloat(prompt("Qual é a altura?"))
let largura = parseFloat(prompt("Qual é a largura?"))
let areaTotal = altura * largura
let tinta = 2
let tintaTotal = areaTotal / tinta
console.log (`A area é ${areaTotal} metros quadrados, já a quantidade necessaria de tinta é de ${tintaTotal} litros` )