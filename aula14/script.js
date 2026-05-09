function contador(){
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passos = Number(document.getElementById('passos').value);
    let p = document.getElementById('resultado');
    p.innerText = 'Contegem: ';

    if(inicio < fim){
        for(let i=inicio;i<=fim;i+=passos){
            p.innerText += `👉 ${i}`;
        }
    }else{
        for(let i=inicio;i>=fim;i-=passos){
            p.innerText += `👉 ${i}`;
        }
    }
    p.innerText += ' 🏴'
}