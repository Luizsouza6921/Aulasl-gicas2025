const prompt = require("prompt-sync")()

let velocidade = number(prompt('Digita a velocidade do carro'))

if (velocidade > 80 ){
    let valorMulta = (velocidade - 80 ) * 7;
    console.log(`voce foi multado, valor da multa R$ ${valorMulta}`);
} else { 
    console.log('voce nao foi multado');
}       