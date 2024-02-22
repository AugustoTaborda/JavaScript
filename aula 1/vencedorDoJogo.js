// Função para determinar o vencedor de um jogo de futebol
function vencedorDoJogo(golsTimeA, golsTimeB) {
    if (golsTimeA > golsTimeB) {
        return "TIME A venceu!";
    } else if (golsTimeB > golsTimeA) {
        return "TIME B venceu!";
    } else {
        return "EMPATE";
    }
}

// Exemplo de uso da função
var golsTimeA = parseInt(prompt("Quantos gols o TIME A marcou?"));
var golsTimeB = parseInt(prompt("Quantos gols o TIME B marcou?"));
console.log(vencedorDoJogo(golsTimeA, golsTimeB));
