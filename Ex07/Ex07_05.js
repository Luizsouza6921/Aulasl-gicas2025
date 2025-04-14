const numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = Math.floor(Math.random() * 100);
}

for (let i = 0; i < 5; i++) {
  console.log("Número:", numeros[i], "Dobro:", numeros[i] * 2);
}