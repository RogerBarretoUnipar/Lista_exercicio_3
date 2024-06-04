let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let salario = document.querySelector("#salario");

btn.addEventListener("click", demonizaSalario);

function demonizaSalario() {
    let salarioInicial = parseFloat(salario.value);
    let salarioComAumento = salarioInicial * 1.15;
    let salarioComImposto = salarioComAumento * 0.92; // 100% - 8%

    resultado.textContent = `Salário inicial: R$ ${salarioInicial.toFixed(2)}\n`;
    resultado.textContent += `Salário com aumento: R$ ${salarioComAumento.toFixed(2)}\n`;
    resultado.textContent += `Salário final após impostos: R$ ${salarioComImposto.toFixed(2)}`;
}

btn.addEventListener("click", demonizaSalario);