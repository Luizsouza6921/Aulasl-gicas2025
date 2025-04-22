const prompt = require('prompt-sync')();

let GanhoPorHora = Number(prompt('Ganho por Hora ?'));
let HrsTrabalhadasNoMes = Number(prompt('Quantas horas foram trabalhadas esse mes ?'));

let SalarioMensal = GanhoPorHora * HrsTrabalhadasNoMes;
console.log(`Seu salário será ${SalarioMensal}`);
