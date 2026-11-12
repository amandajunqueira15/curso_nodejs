const x = 10;

// x = 2; // sem o try-catch o programa dá um erro "gritante"

try {
  x = 2;
} catch (err) {
  console.log(`Erro: ${err}`);
}
