const prompt = require('prompt-sync')();
let genero = prompt('Digite o gênero (H/M): ')
let altura = prompt('Digite a altura: ');
if (genero.toUpperCase() == 'H') {
    let PesoIdealH = 72.7 * altura - 58;
    console.log(`Seu peso ideal se for homem ${PesoIdealH}`);
} else if (genero.toUpperCase() == 'M'){
    let PesoIdealM = 62.1 * altura - 44.7;
    console.log(`Seu peso ideal se for mulher ${PesoIdealM}`);
}