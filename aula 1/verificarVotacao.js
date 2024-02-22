
function verificarVotacao(anoAtual, anoNascimento) {
    var idade = anoAtual - anoNascimento;
    if (idade >= 16) {
        return "Você pode votar este ano!";
    } else {
        return "Desculpe, você não pode votar este ano.";
    }
}


function exibirResultado(anoAtual, anoNascimento) {
    var mensagem = verificarVotacao(anoAtual, anoNascimento);
    console.log(mensagem);
}


var anoAtual = new Date().getFullYear();
var anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"));
exibirResultado(anoAtual, anoNascimento);
