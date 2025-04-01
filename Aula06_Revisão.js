//importando biblioteca para receber informação do usuario
const prompt = require('prompt-sync')();

//Declarando variavel sem dados 
let nota;
//Declarando variavel com informação 
let nome= "Carlos";

//Reatribuindo um valor à variavel nome
nome = "Roberto";
nota = 8.5;

let sobrenome = prompt ('Digite seu sobrenome: ');
let nota1 = Number(prompt('Digite a nota da 1ª: Prova '))
let nota2 = Number(prompt('Digite a nota da 2ª: Prova '))

//Processamento dos dados 
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('Digite sua idade: ')
let idadeNumero = parseInt(idade);

//saida dos dados 
console.log('---Relatorio final---');
console.log(nomeCompleto);
console.log(`O seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log('O seu nome é: ' + nomeCompleto + '\n sua idade ' + idade);
console.log(`Sua media é: ${media} `);

let n = 0; //0
n = 0 + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1;    //4 
n++;       //5
n += 3;    //8
n--;       //7
n = n - 1; //6
n -= 2;    //4

//Resolução do exercicio da aula anterior
let horasPorDia = Number(prompt('Quantas horas trabalhou por dia ?'));
let DiasTrabalhados = Number(prompt('Quantos dia trabalhou ?'))
let ValorHora = Number(prompt('Qual é o valor da hora ?'))
let totalHoras = DiasTrabalhados * horasPorDia;
let custoTotal = totalHoras * ValorHora;
console.log(`O custo total é de R$ ${custoTotal}`);
