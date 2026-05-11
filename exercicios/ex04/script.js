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
    for(let valor of vetor){
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
    if(vetor.length == 0){
        window.alert('Insira um número antes de finalizar!');
    }else{
        res.innerHTML = '';
    
        res.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`;
        
        vetor.sort((a, b) => a-b);

        let menor = vetor[0];
        let posicao = vetor.length;
        let maior = vetor[posicao - 1];
        res.innerHTML += `<p>O menor valor inserido foi ${menor}.</p>`;
        res.innerHTML += `<p>O maior valor inserido foi ${maior}.</p>`
        res.innerHTML += `<p>A média dos valores inseridos é ${media(vetor)}.</p>`
    }
}