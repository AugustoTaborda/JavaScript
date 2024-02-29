const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalPessoas = 0;
let canais = {
    4: 0,
    5: 0,
    7: 0,
    12: 0
};

function calcularPorcentagemAudiencia() {
    console.log("Porcentagem de audiência em cada canal:");
    console.log("----------------------------------------");
    for (let canal in canais) {
        const porcentagem = (canais[canal] / totalPessoas) * 100 || 0;
        console.log(`Canal ${canal}: ${porcentagem.toFixed(2)}%`);
    }
}

function receberDados() {
    rl.question('Digite o número do canal (ou 0 para encerrar): ', (canalInput) => {
        const canal = parseInt(canalInput);
        if (canal === 0) {
            calcularPorcentagemAudiencia();
            rl.close();
            return;
        }

        rl.question('Número de pessoas assistindo: ', (pessoasInput) => {
            const pessoas = parseInt(pessoasInput);
            canais[canal] += pessoas;
            totalPessoas += pessoas;
            receberDados();
        });
    });
}

console.log("Digite o número do canal e o número de pessoas assistindo (ou 0 para encerrar):");
receberDados();
