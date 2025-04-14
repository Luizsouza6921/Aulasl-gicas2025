const prompt = require('prompt-sync')();
    //Iteração sobre onossos  vetores (arrays / listas)
        //Vetor         0        1          2        3
            let frutas = ['maça', 'Banana', 'Abacaxi', 'Uva'];
                //Para iterar sobre um vetor , utilizamos o for
                    for (let x = 0; x < frutas.length; x++) {
                        let frutasAtual = frutas[x];
                            console.log(`a fruta da posição ${x} é ${frutasAtual}`);
                                }
                                    console.log('Fim!');

//Iterando sobre uma lista usando o for of 

let listaJogadores = ['Cristiano Ronaldo', 'Pelé', 'Neymar', 'Pedro Luca']
    for (let jogador of listaJogadores ) {
        console.log(`O jogador é ${jogador}`);
    
}

let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,] 
    let soma = 0;
        for (let numero of numeros1 ) {
            console.log(`O Numero é ${numero}`);
                soma = numero + soma;
}

//verificando se um elemento existe em uma array
    
    let vogais = ['a','e','i','o','u']
        let consoantes = ['b ', 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'j' , 'k' , 'l' , 'm' , 'n' , 'p' , 'q' , 'r' , 's' , 't' , 'v' , 'w' , 'x' , 'y' , 'z']
            let numero = ['0','1','2','3','4','5','6','7','8','9']

                let letraparaverificar = prompt('digite uma letra:  ')
                    if (vogais.includes(letraparaverificar.toLowerCase())) {
                        console.log(`a letra ${letraparaverificar} e uma vogal`);
                            }else if (consoantes.includes(letraparaverificar.toLowerCase())){
                                console.log(`a letra ${letraparaverificar} não e uma vogal`)
                                    }else if(numeros.includes(letraparaverificar)){
                                        console.log(`${letraparaverificar} naõ e uma numero `);
                                            }else {
                                                console.log(`${letraparaverificar} nao e uma letra nem numero `);    
}
//obtendo a posição de um item em um array usando o for of e a função entries()
    //          pos       0       1          2        3
        let listaFrutas = ['Maçã', 'Banana', 'Abacaxi', 'Uva']
            for (const [pos, fruta] of listaFrutas.entries()) {
                console.log(`a fruta da posição ${pos} é ${fruta}`);
    }

//Separando uma string utilizando o split()
    let produtos = 'celular , computador, notebook, tablet, smartphone'
        let listaProdutos = produtos.split(',')
            console.log(produtos);
                console.log(listaProdutos);
//string são uma lista (vetores / arrays) de caracteres
//            01234
let escola = 'SENAI'; //['S', 'E', 'N', 'A', 'I']
console.log(escola[0]); //S
//utilizando o for of exibir a palavra da seguinte forma
//S
//E
//N
//A
//I
for (const letra of escola) {
    console.log(letra);
    }

     
    


