const prompt = require("prompt-sync")()

inicio = Number(prompt("Digite o valor de início: "))
fim = Number(prompt("Digite o valor de fim: "))
passo = Number(prompt("Digite o valor do passo: "))

for (let i = inicio; i <= fim; i += passo) {
    console.log(i)
    }
    console.log("Fim")


