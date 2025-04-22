//escopo de variaveis 
//variavel global pode ser acessada em qualquer lugar
//variavel local so pode ser acessada dentro do bloco
function NomeEscola(){
    let escola = 'SESI'
    console.log(`Valor dentro da função : ${escola}`);
    
}

let escola = 'SENAI'
console.log(`Valor fora da função: ${escola}`);
NomeEscola();
console.log(`Valor após a função: ${escola} `);


//utilizando variavel local
var escola2 = 'SENAI'

function NomeEscola2(){
    console.log(`Valor dentro da função : ${escola2}`);
}

    escola2 = 'SENAI'
console.log(`Valor fora da função: ${escola2}`);
NomeEscola2();
console.log(`Valor após a função: ${escola2} `);


//documetando funções usando o JSDoc
/** 
 *  Soma de dois numeros 
 * @param {number} a - primeiro numero
 * @param {number} b - segundo numero
 * @returns {number} - soma dos dois numeros
 */
function Soma(a, b){


}
Soma(2,4)