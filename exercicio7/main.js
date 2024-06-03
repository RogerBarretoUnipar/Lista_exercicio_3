let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");

function fazDias() {
    let dias = (parseInt(mes.value) * 30) + parseInt(dia.value);
    resultado.textContent = "Já se passaram " + dias + " Dias";
}

btn.addEventListener("click", fazDias);
