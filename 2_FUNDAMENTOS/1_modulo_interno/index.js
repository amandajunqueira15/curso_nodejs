const meuModulo = require('./meu_modulo'); // com módulos internos é obrigatório o uso do ./ para especificar que vem de um arquivo interno
const soma = meuModulo.soma;

soma(2, 3);
soma(5, 10);

// meuModulo.soma(10, 10);
