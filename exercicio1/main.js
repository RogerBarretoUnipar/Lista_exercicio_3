let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let altura = document.querySelector("#altura");
let largura = document.querySelector("#largura");

function desenhaTerreno() {

    let alturaValor = altura.value;
    let larguraValor = largura.value;
    let area = altura.value * largura.value;

   
    let terrenoHTML = "<br><div style='width: " + larguraValor + "0px; height: " + alturaValor + "0px; background-color: green; align-self: center; color: white; text-align: center;'>" + area + "M² </div>";


    resultado.innerHTML = terrenoHTML;
}


btn.addEventListener("click", desenhaTerreno);
