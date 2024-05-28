let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let cavalos = document.querySelector("#cavalos");


function calculaFerradura()
{
    let ferraduras = cavalos.value * 4;
    resultado.textContent = "Será necessário " + ferraduras + " Ferraduras";
}

btn.addEventListener("click", calculaFerradura);