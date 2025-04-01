const prompt = require('prompt-sync')(); 

let Nt1 =Number(prompt('Me fala a 1ª nota !'))
let Nt2 = Number(prompt('Me fala a 2ª nota !'))
let media = (Nt1 + Nt2) / 2
{
    if (media >= 7) {
        console.log('aprovado');
    }else {
        console.log('Reprovado');
     } if (media < 7 && media >= 5) {
                console.log('Recuperação');}
                
     }
     
