function tabuada(){
    let tab = document.getElementById('tab');
    let num = Number(document.getElementById('num').value);

    if(num == 0){
        window.alert('Por favor, digite um diferente de 0!');
    }else{
        tab.innerText = '';
        for(let i=1;i<=10;i++){
            let item = document.createElement('option');
            item.text = `${i} X ${num} = ${num * i}`;
            tab.appendChild(item);
        }
    }
}