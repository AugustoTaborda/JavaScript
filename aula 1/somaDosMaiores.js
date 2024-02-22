
function somaDosMaiores(numero1, numero2, numero3) {
    var numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => b - a);
    return numeros[0] + numeros[1];
}


var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));
var soma = somaDosMaiores(valor1, valor2, valor3);
console.log("A soma dos dois maiores valores é: " + soma);
