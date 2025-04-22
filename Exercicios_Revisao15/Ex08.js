function verificarValor() {
    let valor = prompt("Digite um valor:");
    valor = parseFloat(valor);

    if (valor > 0) {
        console.log( 'O valor é positivo.');
    } else if (valor < 0) {
        console.log
        ('O valor é negativo.');
    } else {
        console.log('O valor é zero.');
       
}
}


verificarValor();