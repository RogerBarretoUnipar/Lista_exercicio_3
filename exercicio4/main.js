let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");

function diasVida()
{
    let diasVivivdos = parseInt(idade.value * 365);
    resultado.textContent = nome.value + " você já viveu " + diasVivivdos + " dias";
}

btn.addEventListener("click", diasVida);