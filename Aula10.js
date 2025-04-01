//estrutura de laço de repetição While
const prompt = require('prompt-sync')();

let resposta = 'S';

while (resposta == 'S') {
    console.log('Voce esta dentro do bloco');
    resposta = prompt('Deseja Continuar ? S/N')
}

console.log('FIM');

let senhaSecreta = 'SENAI'
let senhaDigitada;
while (senhaSecreta == senhaDigitada) {
    console.log('Descubra a senha secreta');
    senhaDigitada = prompt('Qual a senha?')
    
}

//exemplo 3
let contador = 5;
while (contador >=1) {
    console.log(`O contador está no nº ${contador}`);
    contador++; //contador = contador + 1;

}

//exemplo 4
//posso deixar meu laço executando sem uma condição específica, apenas 
//com while (true) e encerrar o loop com o break 
let total = 0;
let qtde = 0;

while (true) {
    let valor = Number (prompt('Digite o valor do produto (0 pra encerrar): '))

    if (valor == 0) {
        break;
    } else {
        total = valor + total;
        qtde++;
    }
}

console.log(`Voce comprou no total ${qtde} produtos`);
console.log(`Valor total da compra R$ ${total.toFixed(2)}`);
