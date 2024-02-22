
function ordenarCrescente(numero1, numero2, numero3) {
    var numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => a - b);
    return numeros;
}


var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));
var ordem = ordenarCrescente(valor1, valor2, valor3);
console.log("Os valores em ordem crescente são: " + ordem.join(", "));
