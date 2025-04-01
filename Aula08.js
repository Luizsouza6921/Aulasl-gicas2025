//Estrutura condicional 
const prompt = require('prompt-sync')();




let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2 );     //False pq 2 condição é F
console.log(a > 1 && b < 2 );     //False pq apensas 1 condição é V
console.log(a > 1 && b < 4 );     //true pq 2 condição é V
console.log(a > 1 && b < 4 && c > 4);     //true todas condição V
console.log(a > 1 && b < 4 && c > 5);     //False

console.log(a > 2 && b < 2 );     //False nenhuma condição é V
console.log(a > 1 && b < 2 );     //True pelo menos 1 V
console.log(a > 1 && b < 4 );     //True pelo menos 1 V
console.log(a > 1 && b < 4 && c > 4);     //True pelo menos 1 V


let altura = Number(prompt('Digite sua altura :'))
let peso = Number(prompt('Digite seu peso :'))
let imc = peso / (altura ** 2 );

if (imc < 18.5){
    console.log('Você está abaixo do peso ideal')
} 
else if (imc >= 18.6 && imc > 24.5 ) {
    console.log('peso normal')       
} else if (imc >= 25 && imc <= 29.9) {
    console.log('sobrepeso')
} else if (imc >= 30) {
    console.log('obesidade')
}

//exercicio 
let lado1 =Number(prompt('Qual o lado 1 do triangulo ?'))
let lado2 =Number(prompt('Qual o lado 2 do triangulo ?'))
let lado3 =Number(prompt('Qual o lado 3 do triangulo ?'))
if (lado1 == lado2 && lado2 == lado3){
        console.log('É um triangulo equilátero');
} else if ( lado1 != lado2 && lado2 != lado3 ){
        console.log('é um triangulo escaleno');
} else {
    console.log('É um triangulo');
}
console.log('seu triangulo é um isósceles');

let valorVenda = Number(prompt('Qual o valor de venda ?'))
let horasSemanais = Number(prompt('Quantas horas você trabalha por semana ?'))
if (valorVenda > 5000 || horasSemanais > 40 ){
console.log('O vendedor tem direito a bonus!');
}else{
console.log('nao tem direito a bonus');

}

let consoante = prompt('Qual a consoante')
let vogal = prompt('qual a vogal ?')
if (vogal == 'a' || vogal == 'e' || vogal == 'i' || vogal == 'o' || vogal == 'u'){
    console.log('vogal')
    }else{ console.log('consoante')}
