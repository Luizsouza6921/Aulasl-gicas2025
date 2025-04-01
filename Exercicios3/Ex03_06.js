const prompt = require('prompt-sync')();

let salário =  Number(prompt('Qual seu salário:'));
if (salário <=2000) {
    let reajuste = 0.12 * salário
    console.log(reajuste + salário);
}else if (salário >2000 && salário <=4000){
    let reajuste2 = 0.10 * salário
    console.log (reajuste2 + salário);
} else if ( salário >4000){
    let reajuste3 = 0.08 * salário
    console.log (reajuste3 + salário);
}
