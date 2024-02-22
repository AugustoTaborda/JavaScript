
function ordenarValores(numero1, numero2) {
    if (numero1 <= numero2) {
        return [numero1, numero2];
    } else {
        return [numero2, numero1];
    }
}


function exibirOrdenados(numero1, numero2) {
    var [menor, maior] = ordenarValores(numero1, numero2);
    console.log("Os valores em ordem crescente são: " + menor + ", " + maior);
}


var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
exibirOrdenados(valor1, valor2);
