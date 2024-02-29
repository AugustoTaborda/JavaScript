const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalCandidatos = 0;
let candidatosMasculinos = 0;
let candidatosFemininos = 0;
let totalIdadeHomensComExperiencia = 0;
let totalHomensComMaisDe45Anos = 0;
let mulheresComMenosDe35ComExperiencia = 0;
let menorIdadeMulherComExperiencia;

function calcularEstatisticas() {
    const mediaIdadeHomensComExperiencia = totalIdadeHomensComExperiencia / candidatosMasculinos;
    const porcentagemHomensMaisDe45 = (totalHomensComMaisDe45Anos / candidatosMasculinos) * 100;

    console.log(`Número de candidatos do sexo feminino: ${candidatosFemininos}`);
    console.log(`Número de candidatos do sexo masculino: ${candidatosMasculinos}`);
    console.log(`Idade média dos homens com experiência: ${mediaIdadeHomensComExperiencia.toFixed(2)}`);
    console.log(`Porcentagem de homens com mais de 45 anos: ${porcentagemHomensMaisDe45.toFixed(2)}%`);
    console.log(`Número de mulheres com menos de 35 anos e experiência: ${mulheresComMenosDe35ComExperiencia}`);
    console.log(`Menor idade entre as mulheres com experiência: ${menorIdadeMulherComExperiencia}`);
}

function receberInformacoesCandidato() {
    rl.question('Idade do candidato: ', (idadeInput) => {
        const idade = parseInt(idadeInput);
        if (idade === 0) {
            calcularEstatisticas();
            rl.close();
            return;
        }

        rl.question('Sexo (M=1 ou F=2): ', (sexoInput) => {
            const sexo = parseInt(sexoInput);

            rl.question('Experiência no serviço (S=1 ou N=2): ', (experienciaInput) => {
                const experiencia = parseInt(experienciaInput);

                if (sexo === 1) {
                    candidatosMasculinos++;
                    if (experiencia === 1) {
                        totalIdadeHomensComExperiencia += idade;
                        if (idade > 45) {
                            totalHomensComMaisDe45Anos++;
                        }
                    }
                } else if (sexo === 2) {
                    candidatosFemininos++;
                    if (experiencia === 1 && idade < 35) {
                        mulheresComMenosDe35ComExperiencia++;
                    }
                    if (experiencia === 1) {
                        if (!menorIdadeMulherComExperiencia || idade < menorIdadeMulherComExperiencia) {
                            menorIdadeMulherComExperiencia = idade;
                        }
                    }
                }

                totalCandidatos++;
                receberInformacoesCandidato();
            });
        });
    });
}

console.log("Digite as informações dos candidatos (idade, sexo e experiência).");
receberInformacoesCandidato();
