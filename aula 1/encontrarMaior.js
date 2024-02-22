
function encontrarMaior(numero1, numero2, numero3) {
    var maior = numero1;
    if (numero2 > maior) {
        maior = numero2;
    }
    if (numero3 > maior) {
        maior = numero3;
    }
    return maior;
}


function exibirMaior(numero1, numero2, numero3) {
    var maior = encontrarMaior(numero1, numero2, numero3);
    console.log("O maior valor entre " + numero1 + ", " + numero2 + " e " + numero3 + " é: " + maior);
}


var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));
exibirMaior(valor1, valor2, valor3);
