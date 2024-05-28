let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let kg = document.querySelector("#kg");

function calculaKG()
{
    let valorPrato = parseFloat(kg.value * 12);
    resultado.textContent = "Seu pratinho deu R$" + valorPrato;
}

btn.addEventListener("click", calculaKG);