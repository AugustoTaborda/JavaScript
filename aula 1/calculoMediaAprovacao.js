
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}


function verificarAprovacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


function exibirResultado(nota1, nota2) {
    var media = calcularMedia(nota1, nota2);
    var situacao = verificarAprovacao(media);

    console.log("Nota da 1ª avaliação: " + nota1);
    console.log("Nota da 2ª avaliação: " + nota2);
    console.log("Média: " + media);
    console.log("Situação: " + situacao);
}


var nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"));
var nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"));
exibirResultado(nota1, nota2);
