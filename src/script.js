const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep) {
    let dNone, dBlock;
    if (currentStep === 1) {
        dNone = firstDiv;
    } else if (currentStep === 2) {
        dNone = secondDiv;
    } else {
        dNone = finalDiv;
    }

    dNone.style.display = 'none';

    if (nextStep === 1) {
        dBlock = firstDiv;
    } else if (nextStep === 2) {
        dBlock = secondDiv;
    } else {
        dBlock = finalDiv;
    }
    
    dBlock.style.display = 'block';
}

function calculateMacroConsumption() {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const idade = document.getElementById('idade');
    peso.style.border = 'none';
    altura.style.border = 'none';
    idade.style.border = 'none';

    if (!peso.value || !altura.value || !idade.value) {
        if (!peso.value) {
            peso.style.border = '1px solid red';
        }
        if (!altura.value) {
            altura.style.border = '1px solid red';
        }
        if (!idade.value) {
            idade.style.border = '1px solid red';
        }
    } else {
        const pesoCorporal = parseFloat(peso.value);
        const alturaCorporal = parseFloat(altura.value);
        const idadePessoa = parseInt(idade.value);

        // Cálculo da quantidade recomendada de proteína (2x peso corporal)
        const quantidadeProteina = 2 * pesoCorporal;

        // Cálculo da quantidade recomendada de carboidratos (3x peso corporal)
        const quantidadeCarboidratos = 3 * pesoCorporal;

        // Cálculo da quantidade recomendada de gordura (1x peso corporal)
        const quantidadeGordura = pesoCorporal;

        // Cálculo do consumo diário de água (35x peso corporal)
        const consumoAgua = 35 * pesoCorporal;
        
        const result = document.getElementById('resultado');
        result.innerHTML = `Proteína: ${quantidadeProteina.toFixed(2)} gramas<br>Carboidratos: ${quantidadeCarboidratos.toFixed(2)} gramas <br>Gordura: ${quantidadeGordura.toFixed(2)} gramas<br>Consumo de água: ${consumoAgua.toFixed(2)} litros `;
        go(2, 3);
    }
}
