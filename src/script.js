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

function calculateProteina() {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border = 'none';
    altura.style.border = 'none';

    if (!peso.value || !altura.value) {
        if (!peso.value && !altura.value) {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        } else if (!peso.value) {
            peso.style.border = '1px solid red';
        } else {
            altura.style.border = '1px solid red';
        }
    } else {
        const pesoCorporal = parseFloat(peso.value);

        // Cálculo da quantidade recomendada de proteína
        const quantidadeProteina = 2 * pesoCorporal;
        const result = document.getElementById('resultado');
        result.innerHTML = 'Proteína recomendada: ' + quantidadeProteina + ' gramas por dia';
        go(2, 3);
    }
}
