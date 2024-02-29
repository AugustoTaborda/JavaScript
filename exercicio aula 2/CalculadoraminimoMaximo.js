const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valores = [];

function receberValores() {
  rl.question('Digite um valor inteiro e positivo (ou zero para encerrar): ', (valor) => {
    valor = parseInt(valor);
    if (valor < 0) {
      console.log("Valor negativo. Por favor, digite um valor inteiro e positivo.");
      receberValores();
    } else if (valor === 0) {
      calcularMinMax();
      rl.close();
    } else {
      valores.push(valor);
      receberValores();
    }
  });
}

function calcularMinMax() {
  if (valores.length === 0) {
    console.log("Nenhum valor fornecido.");
  } else {
    let max = Math.max(...valores);
    let min = Math.min(...valores);
    console.log("Maior valor:", max);
    console.log("Menor valor:", min);
  }
}

console.log("Digite os valores inteiros e positivos (digite 0 para encerrar):");
receberValores();
