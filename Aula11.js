//estrutura de laço de repetição
const prompt = require('prompt-sync')();

//inicialização da variavel ; condição do for; incremento da variavel 
for (let contador = 1; contador <= 5; contador++ ) {
    console.log(contador);
}
//Neste for iniciamos a partir do nmr 5, até nº50
//incrementandode 3 em 3 no contador
for (let contador = 5; contador <= 50; contador+= 5 ) {
    console.log(`O contador é ${contadpr}`);
    
}

for (let contador = 1; contador <= 5; contador++ ) {
    console.log(contador);
}

console.log('Entregando os notebooks');
for (let nr= 1; nr <= 32; nr++) {
    let nome = prompt (`Quem é o nº ${nr}: `);
let presente = prompt (`O(A) ${nome} está presente (S ou N)?`)

}

if (presente == 'S') {
    console.log(`pegar o notebook ${nr}`);
    console.log(`levar o notebook até o(a) ${nome}`);
} else {
    console.log(`Nâo pegar o notebook ${nr}`);
    
}

//TABUADA USANDO FOR

let nr = 6;
for (let contador = 1; contador <= 10; contador++){
    console.log(`${nr} x ${contador} = ${nr * contador }`);
    

}