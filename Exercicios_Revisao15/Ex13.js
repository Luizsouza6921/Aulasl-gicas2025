function verificarSituacao(nota1, nota2, nota3, nota4) {

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
 

    console.log("Média do aluno: " + media.toFixed(2));  

    if (media > 7) {
      console.log("Aluno aprovado!");
    } else if (media >= 5) {
      console.log("Aluno em recuperação.");
    } else {
      console.log("Aluno reprovado.");
    }
  }
 
  verificarSituacao(8, 6, 7, 9);