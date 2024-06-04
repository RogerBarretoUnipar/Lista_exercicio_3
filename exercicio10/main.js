let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let dias = document.querySelector("#dias");

function semAcidentes() {
    let totalDias = parseInt(dias.value);
    let anos = Math.floor(totalDias / 365);
    let diasRestantes = totalDias % 365;
    let meses = Math.floor(diasRestantes / 30);
    let diasSobrando = diasRestantes % 30;

    let mensagem = 'Estamos';

    if (anos > 0) {
        mensagem += ` ${anos} ano${anos > 1 ? 's' : ''}`;
        if (meses > 0) {
            mensagem += ` e ${meses} mes${meses > 1 ? 'es' : ''}`;
        }
        if (diasSobrando > 0) {
            mensagem += ` e ${diasSobrando} dia${diasSobrando > 1 ? 's' : ''}`;
        }
    } else if (meses > 0) {
        mensagem += ` ${meses} mes${meses > 1 ? 'es' : ''}`;
        if (diasSobrando > 0) {
            mensagem += ` e ${diasSobrando} dia${diasSobrando > 1 ? 's' : ''}`;
        }
    } else if (diasSobrando > 0) {
        mensagem += ` ${diasSobrando} dia${diasSobrando > 1 ? 's' : ''}`;
    }

    mensagem += ' sem acidentes.';
    
    resultado.textContent = mensagem;
}



btn.addEventListener("click", semAcidentes);
