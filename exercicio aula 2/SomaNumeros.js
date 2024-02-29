const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSomas() {
  let numero;
  let somaPositivos = 0;
  let somaNegativos = 0;

  rl.question('Digite uma lista de números positivos ou negativos finalizada com o número zero: ', (input) => {
    const numeros = input.split(' ').map(Number);

    for (let i = 0; i < numeros.length; i++) {
      numero = numeros[i];
      if (numero === 0) {
        break;
      } else if (numero > 0) {
        somaPositivos += numero;
      } else {
        somaNegativos += numero;
      }
    }

    const somaTotal = somaPositivos + somaNegativos;
    console.log("Soma dos números positivos:", somaPositivos);
    console.log("Soma dos números negativos:", somaNegativos);
    console.log("Soma total:", somaTotal);

    rl.close();
  });
}

console.log("Digite uma lista de números positivos ou negativos finalizada com o número zero:");
calcularSomas();
