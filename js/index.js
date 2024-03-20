
 function setcalcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    if (peso === '') {
        document.getElementById('peso').style.backgroundColor = 'lightcoral';
    } else {
        document.getElementById('peso').style.backgroundColor = '';
    }

    if (altura === '') {
        document.getElementById('altura').style.backgroundColor = 'lightcoral';
    } else {
        document.getElementById('altura').style.backgroundColor = '';
    }

    if (peso === '' || altura === '') {
        alert('Por favor, preencha todos os campos.');
        return; 
    }

    let imc = peso / (altura * altura);

    let resultado = document.getElementById('resultado_imc');
    resultado.innerHTML = `
    <p>Valor do IMC: ${imc.toFixed(2)}</p>
    <p>Status do IMC: ${getStatusIMC(imc)}</p>
    `;
}

function getStatusIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc < 34.9) {
        return 'Obesidade grau 1';
    } else if (imc < 39.9) {
        return 'Obesidade grau 2';
    } else {    
        return 'Obesidade grau 3';
    }
}

function setlimparCampos() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}

function setLimparResultadoIMC() {
    let resultadoIMC = document.getElementById('resultado_imc');
    resultadoIMC.innerHTML = '';

    setlimparCampos();
}

