
let comidas = [];

for (let i = 0; i < 6; i++) {
    let comida = prompt(`Digite a comida ${i + 1}:`);
    comidas.push(comida);
}

console.log('Lista de comidas:', comidas);

console.log('Segunda comida da lista:', comidas[1]);

let novaComida = prompt('Digite uma nova comida para adicionar:');
comidas.push(novaComida);
console.log('Lista após adicionar uma comida:', comidas);

comidas.shift();
console.log('Lista após remover a primeira comida:', comidas);

comidas.sort();
console.log('Lista ordenada', comidas);