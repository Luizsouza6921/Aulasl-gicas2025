function separarParesImpares() {

    const numeros = [];
    const pares = [];
    const impares = [];
 
    for (let i = 0; i < 5; i++) {
      const num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));  // Lê cada número
      numeros.push(num);
     
      if (num % 2 === 0) {
        pares.push(num);
      } else {
        impares.push(num);
      }
    }
 
   
    console.log("Vetor de Números: ", numeros);
    console.log("Vetor de Números Pares: ", pares);
    console.log("Vetor de Números Ímpares: ", impares);
  }
 
  separarParesImpares();