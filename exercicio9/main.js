let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

function calcularDistancia() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    document.getElementById('resultado').innerText = `A distância entre os pontos (${x1}, ${y1}) e (${x2}, ${y2}) é ${distancia.toFixed(2)}`;
}

btn.addEventListener("click", calcularDistancia);