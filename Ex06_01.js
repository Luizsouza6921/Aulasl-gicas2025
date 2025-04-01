let filmes = [
    'A cinco passos de você',
    'Forrest Gump',
    'Matrix',
    'O Senhor dos Anéis',
    'Star Wars: O Império Contra-Ataca',
    'Jurassic Park',
    'Gladiador'];

console.log('Primeiro filme:', filmes[0]);

console.log('Filme da posição 4:', filmes[4]);

filmes[6] = 'Interestelar';
console.log(filmes);

filmes.push('A Origem');
console.log(filmes);

filmes.splice(5, 0, "Vingadores: Ultimato");
console.log(filmes);

filmes.shift();
console.log(filmes);

filmes.pop();
console.log(filmes);

console.log(filmes.slice(0, 3));


console.log(filmes.slice(-4));


console.log(filmes.length);

filmes.sort().reverse();
console.log(filmes);