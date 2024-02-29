const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let faixasEtarias = [0, 0, 0, 0, 0];
let totalPessoas = 0;

function calcularFaixaEtaria(idade) {
    if (idade >= 1 && idade <= 15) {
        faixasEtarias[0]++;
    } else if (idade >= 16 && idade <= 30) {
        faixasEtarias[1]++;
    } else if (idade >= 31 && idade <= 45) {
        faixasEtarias[2]++;
    } else if (idade >= 46 && idade <= 60) {
        faixasEtarias[3]++;
    } else {
        faixasEtarias[4]++;
    }
}

function receberIdade() {
    rl.question('Digite a idade da pessoa: ', (idade) => {
        idade = parseInt(idade);
        if (!isNaN(idade)) {
            calcularFaixaEtaria(idade);
            totalPessoas++;
            if (totalPessoas < 15) {
                receberIdade();
            } else {
                imprimirResultados();
                rl.close();
            }
        } else {
            console.log("Por favor, digite um número válido.");
            receberIdade();
        }
    });
}

function imprimirResultados() {
    console.log("Quantidade de pessoas em cada faixa etária:");
    console.log("1 a 15 anos:", faixasEtarias[0]);
    console.log("16 a 30 anos:", faixasEtarias[1]);
    console.log("31 a 45 anos:", faixasEtarias[2]);
    console.log("46 a 60 anos:", faixasEtarias[3]);
    console.log(">= 61 anos:", faixasEtarias[4]);

    console.log("\nPorcentagem de cada faixa etária em relação ao total de pessoas:");
    console.log("1 a 15 anos:", ((faixasEtarias[0] / totalPessoas) * 100).toFixed(2) + "%");
    console.log("16 a 30 anos:", ((faixasEtarias[1] / totalPessoas) * 100).toFixed(2) + "%");
    console.log("31 a 45 anos:", ((faixasEtarias[2] / totalPessoas) * 100).toFixed(2) + "%");
    console.log("46 a 60 anos:", ((faixasEtarias[3] / totalPessoas) * 100).toFixed(2) + "%");
    console.log(">= 61 anos:", ((faixasEtarias[4] / totalPessoas) * 100).toFixed(2) + "%");
}

console.log("Digite a idade de 15 pessoas:");
receberIdade();
