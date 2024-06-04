let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let raio = document.querySelector("#raio");

function calculaPirraio() {
    let raioValue = parseFloat(raio.value);
    let raioduplicado = raioValue * raioValue;
    let areacaraio = raioduplicado * Math.PI;
    
    resultado.textContent = "TUA PIZZA TEM UMA AREA DE " + areacaraio.toFixed(2);
}

btn.addEventListener("click", calculaPirraio);
