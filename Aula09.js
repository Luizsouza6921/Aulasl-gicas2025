//Estrutura condicionais alinhada 
//Switch case
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVIP = true;

if (valorCompra >= 100) {
    if (clienteVIP == true) {
        console.log(`Voce ganhou R$ ${valorCompra * 0.1}`); 
    }else {
  let desconto = valorCompra * 5 / 100
console.log(`Voce ganhou R$ ${desconto} de desconto`);
    }

}else {

    let restante = valorCompra - 100;
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);
    
}

let idade = Number(prompt('Qual a idade ? '));
 if (idade < 16) {
    console.log('Não pode votar');
 }else {
         if (idade >= 18 && idade <= 70) {
        console.log('Voto Obriatório !');
    } else {
        console.log('Voto facultativo !');
    }
}

//Switch case é uma alternativa ao if else
let n1 = number (prompt ('Digite um Nº:'));
let n2 = number (prompt ('Digite oNº:'));
let op = prompt ('Digite o operador (+ - / * ** ); ')
switch (op) {

case '+':                           //if (op == '+')
console.log(n1 + n2);
break;

case '-':                           //else if (op == '-')
console.log(n1 - n2);
break;

case '/':                           //else if (op == '/')
console.log(n1 / n2);
break;

case '*':                           //else if (op == '*')
console.log(n1 * n2);
break;

case '**':                          //else if (op == '**')
console.log(n1 ** n2);
break;
default:                           //Else
    console.log('Operador inválido');
    



    
}