const prompt = require("prompt-sync")()
let countPares = 0;
let countImpares = 0;

while (true) {
    let numero = parseInt(prompt("Digite um número (0 para parar):"));
    if (numero === 0) {
        break;
    }else {
        if (numero % 2 == 0){
            countPares++;
        }else {
            countImpares++;
        }
    }
}

console.log('Quantos numeros pares foram digitados:', countPares);
console.log('Quantos numeros impares foram digitados:', countImpares);


