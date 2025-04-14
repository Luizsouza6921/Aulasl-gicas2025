function linha () {
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
}

function Cabecalho(){
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
    console.log('SESI / SENAI');
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
    
}
Cabecalho();
function CabecalhoEscola (NomeEscola){
    linha();
    console.log(NomeEscola);
    linha();   
}

CabecalhoEscola('USP')
CabecalhoEscola('SESI')

function Soma (nr1, nr2 ){
let resultado = nr1 + nr2;
console.log(resultado);
}

Soma (5, 8);

//FUNÇÃO0 COM  PARAMETROS E RETORNO  
function media (n1, n2){
    let resultado = (n1 + n2) / 2;
    console.log(resultado);
    return resultado;
}

let valor = Media(5, 8);
