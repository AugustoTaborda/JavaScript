const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let times = []; // Lista de times

function calcularMediasTime(jogadores) {
    let somaPeso = 0;
    let somaIdade = 0;

    for (let jogador of jogadores) {
        somaPeso += jogador.peso;
        somaIdade += jogador.idade;
    }

    const pesoMedio = somaPeso / jogadores.length;
    const idadeMedia = somaIdade / jogadores.length;

    return { pesoMedio, idadeMedia };
}

function calcularMediasGerais(times) {
    let totalJogadores = 0;
    let somaPeso = 0;
    let somaIdade = 0;

    for (let time of times) {
        for (let jogador of time.jogadores) {
            totalJogadores++;
            somaPeso += jogador.peso;
            somaIdade += jogador.idade;
        }
    }

    const pesoMedioGeral = somaPeso / totalJogadores;
    const idadeMediaGeral = somaIdade / totalJogadores;

    return { pesoMedioGeral, idadeMediaGeral };
}

function apresentarInformacoes(times) {
    console.log("Informações de cada time:");
    for (let time of times) {
        const { pesoMedio, idadeMedia } = calcularMediasTime(time.jogadores);
        console.log(`Time: ${time.nome}`);
        console.log(`Peso médio: ${pesoMedio.toFixed(2)} kg`);
        console.log(`Idade média: ${idadeMedia.toFixed(2)} anos`);
        console.log("-------------------------");
    }

    const { pesoMedioGeral, idadeMediaGeral } = calcularMediasGerais(times);
    console.log("Médias gerais de todos os participantes:");
    console.log(`Peso médio: ${pesoMedioGeral.toFixed(2)} kg`);
    console.log(`Idade média: ${idadeMediaGeral.toFixed(2)} anos`);
}

function receberJogadoresTime(numTime, times, callback) {
    if (numTime > 40) {
        callback(times);
        return;
    }

    let jogadores = [];
    console.log(`Digite as informações dos jogadores do time ${numTime}:`);

    for (let i = 1; i <= 23; i++) {
        console.log(`Jogador ${i}:`);
        let nome = readline.question('Nome: ');
        let peso = parseFloat(readline.question('Peso (kg): '));
        let idade = parseInt(readline.question('Idade: '));
        jogadores.push({ nome, peso, idade });
    }

    times.push({ nome: `Time ${numTime}`, jogadores });
    receberJogadoresTime(numTime + 1, times, callback);
}

console.log("Digite as informações dos jogadores para cada time:");
receberJogadoresTime(1, times, apresentarInformacoes); // Iniciar o programa
