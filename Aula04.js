const prompt = require('prompt-sync')();
//Criando nossa primeira variavel
// uma variavel serve par armazenar uma informação/valor 
//O Memoria crie um espaço com nome curso e Receba o valor 'desenvolvimento de sistemas'
var curso = 'Desenvolvimento de Sistemas';

//Exibindo o conteudo da variavel 
console.log('curso');      //para imprimir uma variavel, não se coloca emtre ' '
console.log(curso);        //Jeito correto de usar uma variável 
console.log('curso',curso);

//criando e atribuindo valores a uma variavel 
var idade = 15;              //inteira //integer
var temperatura = 24.5;      //real // float
var nome = 'Luiz Gustavo';   //string 

console.log('ola, ', nome, 'Voce tem', idade, 'anos')
console.log('esta cursando ', curso, 'hoje faz ', temperatura, 'ºC')

console.log('ola, ', nome, 'Voce tem', idade, 'anos' );
console.log('esta cursando ', curso, 'hoje faz ', temperatura, 'ºC')

//template string
//utilizo a crase ``para criar uma string
//para colocar variaveis dentro da string , utilizo ${variavel}    
console .log(`Olá, ${nome} voce tem ${idade} anos esta cursando ${curso} hoje faz ${temperatura}ºC`)

//declarando uma variavel logica/boolean/boleano (true/false)
var podeDirigir = true;
var estaChovendo = false;

//declarando uma variavel nula 
var escola;

vartrue = "var"

//exercicio
//Nota1 valido 
//nomecompleto valido
//nome completo invalido
//Média invalido
//console invalido
//_salario valido
//9dade invalido
//Minha_variavel Valido
//var invalido
//valor$ invalido
//nome-completo invalido
//escola_ valido 
//TELEFONE valido
//true invalido

let cidade = 'andradina'
var turma =  '2ºB'
const ano = 2025 

console.log(turma); 
turma = '3ºB' //reatribuindo o valor de uma variavel
console.log(turma);
// ano = 2026;
//ano = 2026; //nao podemos reatribuir valor a uma constante

let _nome = 'Luiz'
let _idade = 15
let _peso = 60.5

console.log(_nome, _idade, _peso);

console.log(typeof _nome, _idade, _peso);


//no prompt o computador espera o usuario digitar uma informaçao
//Sempre quando recebemos uma informaçao de entrada ela vem em string
_nome = prompt('Qual é o nome ?')     //string
_idade = prompt('Qual é a idade ?')   //number
_peso = prompt('Qual é o peso ?')     //number
console.log(_nome, _idade, _peso);

console.log(typeof _nome, _idade, _peso);

//Criem 2 variaveis num1 e num2 e recebam as informaçoes pelo prompt 
var num1 = prompt('digite o primeiro nº:')
var num2 = prompt('digite o segundo nº:')
console.log(num1 + num2);

console.log(typeof num1);  //string
num1 = Number(num1);       //convertendo a variavel do tipo string para Number
console.log(typeof num1);  //number

//Receber uma informaçao ja convertendo seu tipo de dados 
let nr1 = Number(prompt('Digite o primeiro nº'));  //number
let nr2 = Number(prompt('Digite o segundo nº'));  //number
console.log(nr1 + nr2);

//convertendo os dados de uma variavel 
nr1 = "100.14";           //string
nr1 = Number("100.14");   //convertendo o string para number
nr1 = parseInt("100.14"); //convertendo string para interger 
nr1 = parseFloat("100")   //convertendo string para float 100.00
nr1 = String(100.14);     //convertendo um number para sting

_nome = prompt('Qual é o nome ?')                  //string
_idade = parseInt(prompt('Qual é a idade ?'))      //int
_peso = parseFloat(prompt('Qual é o peso ?'))      //FLoat
console.log(_nome, _idade, _peso);
