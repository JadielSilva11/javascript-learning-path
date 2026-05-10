let vetor = [];
let input = document.getElementById('num');
let select = document.getElementById('result');
let res = document.getElementById('res');

function isNum(input){
    if(Number(input) >= 1 && Number(input) <= 100){
        return 1;
    }else{
        return 0;
    }
}

function inList(vetor, input){
    if(vetor.indexOf(Number(input)) == -1){
        return 0;
    }else{
        return 1;
    }
}

function media(vetor){
    let soma = 0;
    for(let valor in vetor){
        soma += valor;
    }

    return soma / vetor.length;
}

function adicionar(){
    if(isNum(input.value) && !inList(vetor, input.value)){
        vetor.push(Number(input.value));
        let linha = document.createElement('option');
        linha.innerText = `Valor ${input.value} inserido.`
        select.appendChild(linha);
    }else if(!isNum(input.value)){
        window.alert("Valor fora do intervalo permitido!");
    }else{
        window.alert("Valor já está na lista");
    }
}

function finalizar(){
    
}