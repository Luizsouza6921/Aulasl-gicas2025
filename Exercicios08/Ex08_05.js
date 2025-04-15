function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
function executarTabuadas() {
    exibirTabuada(3);
    console.log('');
    exibirTabuada(6);
    console.log('');
    exibirTabuada(8);
}

executarTabuadas();
