const prompt = require('prompt-sync')();

//operaçoes com variaveis 
let nr1 = 13;         
let nr2 = 3;       
let soma = nr1 + nr2;
let subtração = nr1 - nr2;
let multiplicação = nr1 * nr2; 
let divisao = nr1 / nr2;
let exponeciação = nr1 ** nr2;
console.log(soma, subtração, multiplicação, divisao, exponeciação);
 






let valor = 2500.00;
let desconto = 190.00;
valor = valor - desconto;
console.log(`promoção celular com R$ ${desconto} de desconto, por apenas R${valor}`);

//reatribuição de valor da variavel
var numero = 4/2
numero = numero ** 2;
numero = numero * (50-20);
console.log('O valor é ',numero);
console.log(`O valor é : ${numero}`);





//exercicios 
let numero = Number (prompt('qual o numero ?'));
let dobro = numero * 2
let metade = numero / 2
console.log(`O numero é ${numero}, sua metade é ${metade} e o dobro ${dobro}`);




var DIAS = 15 
var horas_por_dia = 8 
var horas = DIAS * horas_por_dia
var valor_final = horas * 100  
console.log(`o valor final é igual a ${valor_final}`);
