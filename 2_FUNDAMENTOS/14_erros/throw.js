// const x = '10'; // dá erro e encerra o programa
const x = 10; // funciona e continua o programa

// checar se x é um número
if (!Number.isInteger(x)) {
  throw new Error('O valor de x não é um número inteiro!');
}

console.log('Continuando o código...');
