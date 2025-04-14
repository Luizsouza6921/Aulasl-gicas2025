let carros = 'Gol,Corsa,Palio,Monza,Fusca,';
let lista = carros.split(',').filter(item => item !== '');

for (let i of lista) {
  console.log(`Posição ${i}: ${lista[i]}`);
}