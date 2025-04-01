const prompt = require('prompt-sync')();

//entrada
let num1 = prompt ('Qual o 1º numero que você deseja somar ?');
let num2 = prompt ('Qual o 2º numero que você deseja somar ?');
//processamento
let soma = num1 + num2;
//Saída
console.log(soma);
console.log(`A soma entre ${num1} e ${num2} é ${soma}`);

