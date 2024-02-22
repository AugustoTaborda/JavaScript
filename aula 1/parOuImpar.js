
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " é par";
    } else {
        return numero + " é ímpar";
    }
}


var valor = parseInt(prompt("Digite um número inteiro:"));
console.log(parOuImpar(valor));
