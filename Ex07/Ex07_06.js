const prompt = require('prompt-sync') ();

let palavra = prompt('Digite uma palavra: ');
let contador = 0;
let vogais = 'a,e,i,o,u,A,E,I,O,U';

for (let i of palavra) {
  if (vogais.includes(palavra[i])) {
    contador++;
  }
}
console.log(`A palavra "${palavra}" tem ${contador} vogais.`);