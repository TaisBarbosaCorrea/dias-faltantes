const diaDeHoje = new Date();
let diasQuefaltam = calculoDias();

while(diasQuefaltam<0){
    alert("A data informada é menor que a data atual, atualiza a págine e insira uma nova data");
    diasQuefaltam = calculoDias;
}

document.querySelector("#dias_restantes").textContent = diasQuefaltam+" dias";

function calculoDias(){
    let dataObjetivo = prompt ("Digite a data do seu objetivo: (formato ANO-MÊS-DIA, exemplo: 2024-07-23)");
    dataObjetivo = new Date(dataObjetivo+"T23:59:59");
    return Math.floor((dataObjetivo - diaDeHoje)/ 86400000);
}