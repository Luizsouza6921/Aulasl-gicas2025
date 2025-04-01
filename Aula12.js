//variaveis compostas / vetores / arrays

//variavel simples , cabe apenas 1 dado por vez

let fruta = 'Maçã';
fruta = 'banana'

//variavel composta , cabe mais de 1 dado
let frutas = ['Maçã' , 'Banana' , 'Abacaxi' , 'Uva']

console.log(frutas);
console.log(frutas[1]);

//declarando uma lista vazia 
let lista = [];

//declaração de uma lista de números
let numeros = [1, 2, 8, 5, 9];

//declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Maria'];

//declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];

//declaração de uma lista com outras listas
let listaDeVetores = [['coca-cola', 'hot-dog'],[5.00, 10.00]];
console.log(listaDeVetores[0][1]);

console.log(frutas);
//alterando o conteudo de um item da lista
frutas[3] = 'Melância';
console.log(frutas);

//inserindo um novo item na lista
//frutas[4]= 'Laranja';
frutas.push('Laranja');  //utilizando o método push
frutas = [...frutas, 'Laranja']; // utilizando o operador spread

//inserindo um novo item em posição especifica
frutas.splice(2, 0, ['Morango', 'Abacate',]);
//  2 - posição
//  0 - quantidade de itens serem removidos

//excluindo itens da lista
frutas.splice(3, 1);4
//  3 - posição
//  1 - quantidade de itens a serem removidos
frutas.shift(); //remove o primeiro item da lista
frutas.pop();   //Remove o ultimo item da lista

console.log(frutas);


frutas = ['Maçã', 'Banana', 'Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva']
console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);
frutas.sort()
console.log(frutas);
frutas.reverse