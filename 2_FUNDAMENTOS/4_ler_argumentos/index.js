// nome
console.log(process.argv); // pega o argumento passado quando o programa é executado Ex: node .\index.js nome=amanda

const args = process.argv.slice(2); // pega o terceiro índice do que foi exibido. Nesse caso [ 'nome=amanda' ]

console.log(args);

const nome = args[0].split('=')[1]; // pega o valor do argumento

console.log(nome);

const idade = args[1].split('=')[1];

console.log(idade);

console.log(`O nome dela é ${nome} e ela tem ${idade} anos!`);

// Executando: node .\index.js nome=amanda idade=32
