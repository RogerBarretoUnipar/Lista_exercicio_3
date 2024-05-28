let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let preco = document.querySelector("#preco");
let pagamento = document.querySelector("#pagamento");

function botaCem()
{
    let litros = parseInt(pagamento.value / preco.value);
    resultado.textContent = "Você abasteceu " + litros + "L por " + pagamento.value;
}

btn.addEventListener("click", botaCem);