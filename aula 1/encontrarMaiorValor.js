
function encontrarMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}


function exibirMaior(numero1, numero2) {
    var maior = encontrarMaior(numero1, numero2);
    console.log("O maior valor entre " + numero1 + " e " + numero2 + " é: " + maior);
}


var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
exibirMaior(valor1, valor2);
