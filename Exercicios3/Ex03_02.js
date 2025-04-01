const prompt = require('prompt-sync')();

let anoAtual = number (prompt('Qual o ano atual ?'));
let anoNascimento = number (prompt ('Qual o ano de nascimento ?'));
let idade = anoAtual - anoNascimento
let faixaEtaria = ''
if (idade < 10) {
        faixaEtaria = "Criança"
}else if (idade >= 11 && idade <= 17){
    faixaEtaria = "adolescente"
}else if (idade >= 18 && idade <= 59) {
    faixaEtaria = "adulto"
}else {
    faixaEtaria = "Idoso"
}



