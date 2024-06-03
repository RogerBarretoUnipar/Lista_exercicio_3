let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let P = document.querySelector("#P");
let M = document.querySelector("#M");
let G = document.querySelector("#G");

function encomendaPeca()
{
    let valorP = parseFloat(P.value * 10);
    let valorM = parseFloat(M.value * 12);
    let valorG = parseFloat(G.value * 15);

    let valorTotal = valorP + valorM + valorG;
    resultado.innerHTML = "Detalhes da sua encomenda: <br>";
    resultado.innerHTML += "- Pequeno (P): R$" + valorP.toFixed(2) + "<br>";
    resultado.innerHTML += "- Médio (M): R$" + valorM.toFixed(2) + "<br>";
    resultado.innerHTML += "- Grande (G): R$" + valorG.toFixed(2) + "<br>";
    resultado.innerHTML += "Valor Total: R$" + valorTotal.toFixed(2);
}

btn.addEventListener("click", encomendaPeca);