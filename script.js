let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputADuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputADuracao.value;


    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qntTotalCerveja = cervejaPP(duracao) * adultos;
    let qntTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    
    resultado.innerHTML = `<p>${qntTotalCarne / 1000} Kg de carnes</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas / 2000)} Garrafas de bebida</p>`


}

function carnePP(duracao){
    if(duracao >= 6)
        return 650
    else
        return 400;
}

function cervejaPP(duracao){
    if(duracao >= 6)
        return 2000
    else
        return 1200;
}

function bebidaPP(duracao){
    if(duracao >= 6)
        return 1500
    else
        return 1000;
}