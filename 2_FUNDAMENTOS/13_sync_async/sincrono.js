const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo.txt', 'oi');

console.log('Fim');

// No caso do síncrono o node espera o fim de uma execução para continuar o código
