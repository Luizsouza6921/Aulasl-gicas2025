const prompt = require('prompt-sync')();

console.log("===========================");
console.log("Ⓜ🆔1️⃣🅰JOGO DA ADIVINHA   ");
console.log("===========================");

let nmrSecreto = Math.floor(Math.random()* 100000) + 1;
let acertou = false;
let tentativas = 0;

while(acertou == false ) {
    let chute = (prompt('Digite um nº entre 1 e 100000: '));
   tentativas++;// tentativas = tentativas + 1;
    if (chute == nmrSecreto) {
        console.log(`Parabéns Voce acertou em ${tentativas} tentativas !!!❤❤`);
        acertou = true;
    }else if (chute > nmrSecreto) {
            console.log(`Voce chutou ${chute}, tente outro numero Menor`);
    }else if (chute < nmrSecreto ) {     
        console.log(`Voce chutou ${chute}, tente outro numero Maior`);
        
    }
}
console.log('FIMM!!');

