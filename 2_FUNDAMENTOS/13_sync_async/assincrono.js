const fs = require('fs');

console.log('Início');

fs.writeFile('arquivo.txt', 'oi', function (err) {
  setTimeout(function () {
    console.log('Arquivo criado!');
  }, 1000);
});

console.log('Fim');

// No caso do assíncrono o node não espera o fim de uma execução e continua o código rodando em paralelo
