const prompt = require('prompt-sync') ();

soma_pares = 0;
soma_impares = 0;
cont_pares = 0;
cont_impares = 0;
for (i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        soma_pares += i; // soma dos pares
        cont_pares++; // contagem dos pares
        } else { // se o número for impar
            soma_impares += i; // soma dos impares
            cont_impares++; // contagem dos impares
            }
            }
            console.log("Soma dos pares: ", soma_pares);
            console.log("Soma dos impares: ", soma_impares);
            console.log("Contagem dos pares: ", cont_pares);
            console.log("Contagem dos impares: ", cont_impares);