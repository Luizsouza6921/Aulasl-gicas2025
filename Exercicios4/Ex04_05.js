const prompt = require("prompt-sync")()

let somaIdadeM = 0;
let qntdeM = 0;
let somaIdadeF = 0;
let qntdeF = 0;

for (let x = 1; x <= 10; x++) {
    let idade =Number (prompt('Digite sua idade :'));
    let sexo = prompt('Digite seu sexo: (M/F)')

    if (sexo == 'M') {
        somaIdadeM = somaIdadeM + idade;
        qntdeM++;
    }    else if (sexo == 'F') {
        qntdeF++;
        somaIdadeF = somaIdadeF + idade;
    }
}
console.log(`A media do sexo masculino é de ${somaIdadeM / qntdeM}`);
console.log(`A media do sexo Feminino é de ${somaIdadeF / qntdeF}`);
console.log(`A media dos grUpo é de ${somaIdadeF + somaIdadeM / 10}`);
