const prompt = require('prompt-sync')();

let GanhoPorHora = Number (prompt ('Quanto voce ganha por hora ?'));
let NmrHrsTrabalhadas = Number(prompt('Quantas horas trabalhadas? '));
let salarioBruto = GanhoPorHora * NmrHrsTrabalhadas;
let IR = salarioBruto * 11/100
let INSS = salarioBruto * 8/100
let sindicato = salarioBruto * 5/100
let salarioLiquido = salarioBruto - (IR + INSS + sindicato);
console.log(`Seu Salário líquido Será : R$ ${salarioLiquido}`);