function elevarQuadrado() {

    const A = [2, 4, 6, 8, 10];
   
    // Vetor para armazenar os quadrados
    const quadrados = [];
   
    for (let i = 0; i < A.length; i++) {
      quadrados.push(A[i] ** 2);
    }
   

    console.log("Quadrados dos elementos do vetor A:");
    console.log(quadrados);
  }
 

  elevarQuadrado();