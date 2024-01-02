// Capturando o submit do formulário html.//
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura'); 

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso || !altura){
        setResultado('Valor(es) Inválido(s)', false);
        return;
    }

    const imc = getImc(peso, altura);
    indice(imc);
});
function getImc(peso, altura){  
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function indice(imc){
   p = createP();
    if(imc < 18.5){
        setResultado('Abaixo do Peso ideal.', 'abaixo');
    }else if(imc >= 18.5 && imc < 25){
        setResultado('Peso ideal', 'ideal');
    }else if(imc >= 25 && imc < 30){
        setResultado('Acima do Peso', 'acima');
    }else if(imc >= 30 && imc < 35){
        setResultado('Obesidade grau I','I');
    }else if(imc >= 35 && imc < 40){
        setResultado('Obesidade grau II', 'II');
    }
    else{
        setResultado('Obesidade grau III', 'III');
    }
}
function createP(){
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, classe){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // zerando html//
    const p = createP(); // Inserindo um paragrafo para usando resultado da função
    p.innerHTML=msg;
    p.classList.add(classe);
    resultado.appendChild(p);
}