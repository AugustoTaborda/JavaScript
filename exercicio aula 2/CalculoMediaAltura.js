const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let somaAlturas = 0;
let contadorPessoas = 0;

function receberDados() {
  rl.question('Digite a idade da pessoa (digite <= 0 para encerrar): ', (idade) => {
    idade = parseInt(idade);

    if (idade <= 0) {
      calcularMediaAlturas();
      rl.close();
    } else {
      rl.question('Digite a altura da pessoa: ', (altura) => {
        altura = parseFloat(altura);

        if (idade > 50) {
          somaAlturas += altura;
          contadorPessoas++;
        }

        receberDados();
      });
    }
  });
}

function calcularMediaAlturas() {
  if (contadorPessoas === 0) {
    console.log("Nenhuma pessoa com mais de 50 anos inserida.");
  } else {
    const mediaAlturas = somaAlturas / contadorPessoas;
    console.log("Média das alturas das pessoas com mais de 50 anos:", mediaAlturas.toFixed(2));
  }
}

console.log("Digite a idade e a altura das pessoas. Digite idade <= 0 para encerrar:");
receberDados();
