document.getElementById("calcular").addEventListener("click", function() {
    let totalConta = parseFloat(document.getElementById("totalConta").value);
    if (!isNaN(totalConta)) {
        let valorPorPessoa = totalConta / 3;
        let carlos = Math.floor(valorPorPessoa);
        let andre = Math.floor(valorPorPessoa);
        let felipe = (totalConta - carlos - andre).toFixed(2);

        document.getElementById("resultado").innerHTML = `Carlos: R$ ${carlos.toFixed(2)}<br>
                                                          André: R$ ${andre.toFixed(2)}<br>
                                                          Felipe: R$ ${felipe}`;
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira um valor válido.";
    }
});
