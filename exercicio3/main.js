let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");

function calculaGuarda()
{
    let lucroPao = parseFloat(paes.value * 0.12);
    let lucroBroa = parseFloat(broas.value * 1.50);
    let lucroTotal = lucroBroa + lucroPao;
    let dezGuardado = lucroTotal * 0.1;

    resultado.innerHTML = "<br>" + "Lucro do pão: " + lucroPao + "<br>" + "Lucro da Broa: " + lucroBroa +  "<br>" + "lucro Total: " + lucroTotal +  "<br>" + "Valor a ser guardado: " + dezGuardado
}

btn.addEventListener("click", calculaGuarda);