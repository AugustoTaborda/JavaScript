const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mediasPorFaixaEtaria = {
  '1 a 10 anos': { pesos: [], totalPessoas: 0 },
  '11 a 20 anos': { pesos: [], totalPessoas: 0 },
  '21 a 30 anos': { pesos: [], totalPessoas: 0 },
  'Maiores de 30 anos': { pesos: [], totalPessoas: 0 }
};

function calcularMediaPorFaixaEtaria(idade, peso) {
  if (idade >= 1 && idade <= 10) {
    mediasPorFaixaEtaria['1 a 10 anos'].pesos.push(peso);
    mediasPorFaixaEtaria['1 a 10 anos'].totalPessoas++;
  } else if (idade >= 11 && idade <= 20) {
    mediasPorFaixaEtaria['11 a 20 anos'].pesos.push(peso);
    mediasPorFaixaEtaria['11 a 20 anos'].totalPessoas++;
  } else if (idade >= 21 && idade <= 30) {
    mediasPorFaixaEtaria['21 a 30 anos'].pesos.push(peso);
    mediasPorFaixaEtaria['21 a 30 anos'].totalPessoas++;
  } else {
    mediasPorFaixaEtaria['Maiores de 30 anos'].pesos.push(peso);
    mediasPorFaixaEtaria['Maiores de 30 anos'].totalPessoas++;
  }
}

function calcularMediasEImprimir() {
  console.log("Médias dos pesos por faixa etária:");

  for (let faixaEtaria in mediasPorFaixaEtaria) {
    const media = mediasPorFaixaEtaria[faixaEtaria].pesos.reduce((total, peso) => total + peso, 0) / mediasPorFaixaEtaria[faixaEtaria].totalPessoas;
    console.log(`${faixaEtaria}: ${media.toFixed(2)} kg`);
  }

  rl.close();
}

function receberIdadeEPeso() {
  rl.question('Digite a idade da pessoa: ', (idade) => {
    idade = parseInt(idade);
    if (!isNaN(idade)) {
      rl.question('Digite o peso da pessoa (em kg): ', (peso) => {
        peso = parseFloat(peso);
        if (!isNaN(peso)) {
          calcularMediaPorFaixaEtaria(idade, peso);

          if (Object.values(mediasPorFaixaEtaria).every(faixaEtaria => faixaEtaria.totalPessoas >= 1)) {
            calcularMediasEImprimir();
          } else {
            receberIdadeEPeso();
          }
        } else {
          console.log("Por favor, digite um peso válido.");
          receberIdadeEPeso();
        }
      });
    } else {
      console.log("Por favor, digite uma idade válida.");
      receberIdadeEPeso();
    }
  });
}

console.log("Digite a idade e o peso de 15 pessoas:");
receberIdadeEPeso();
