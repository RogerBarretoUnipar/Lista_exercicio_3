let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let numero = document.querySelector("#numero");

btn.addEventListener("click", Coisadeiro);

function Coisadeiro() {
    let num = parseInt(numero.value);

    if (isNaN(num)) {
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }

    if (num < 0 || num > 999) {
        resultado.textContent = "Por favor, insira um número inteiro de até três dígitos.";
        return;
    }

    let centena = Math.floor(num / 100);
    let dezena = Math.floor((num % 100) / 10);
    let unidade = num % 10;

    resultado.textContent = `CENTENA = ${centena} DEZENA = ${dezena} UNIDADE = ${unidade}`;
}
