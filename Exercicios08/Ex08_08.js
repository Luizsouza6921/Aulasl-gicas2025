8 
function SenhaAleatoria(qtCaracteres)   {
    let listaCaracteres = ['!', 'a', 5, 'R', '$', '#'];
    let senha = '';
    let posSorteada = Math.floor(Math.random() * 6);
    senha = senha + listaCaracteres[posSorteada];

    return senha;
}
let senha = SenhaAleatoria(20);
console.log(SenhaGerada);
