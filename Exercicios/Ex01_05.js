const prompt = require("prompt-sync")()
let Metros = parseFloat(prompt("Quantos metros são?"))
let cm = Metros * 100
let mili = Metros * 1000
let km = Metros / 1000
console.log (`A conversão em centimetros é ${cm}, em milimetro ${mili} e em km é ${km}`)