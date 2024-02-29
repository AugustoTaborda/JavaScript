const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalAlunos = 0;
let totalAprovados = 0;
let totalReprovados = 0;
let somaMedias = 0;

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function verificarStatus(media) {
    if (media >= 0 && media <= 5.0) {
        return "reprovado";
    } else if (media >= 5.1 && media <= 6.9) {
        return "recuperação";
    } else if (media >= 7.0 && media <= 10) {
        return "aprovado";
    }
}

function imprimirResultados() {
    console.log("Resultados:");
    console.log("-------------------------");
    console.log(`Total de alunos aprovados: ${totalAprovados}`);
    console.log(`Total de alunos reprovados: ${totalReprovados}`);
    console.log(`Média geral do programa: ${somaMedias / totalAlunos}`);
}

function receberNotas() {
    rl.question(`Digite as notas do aluno ${totalAlunos + 1} (nota1 nota2): `, (notasInput) => {
        const notas = notasInput.split(' ').map(Number);
        const media = calcularMedia(notas[0], notas[1]);
        const status = verificarStatus(media);

        console.log(`Média do aluno ${totalAlunos + 1}: ${media.toFixed(2)} - ${status}`);

        if (status === "aprovado") {
            totalAprovados++;
        } else if (status === "reprovado") {
            totalReprovados++;
        }

        somaMedias += media;
        totalAlunos++;

        if (totalAlunos < 6) {
            receberNotas();
        } else {
            imprimirResultados();
            rl.close();
        }
    });
}

console.log("Digite as notas dos 6 alunos (nota1 nota2):");
receberNotas();