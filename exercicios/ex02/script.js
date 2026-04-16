function check(){
    let data = new Date();
    let ano_atual = data.getFullYear();
    let ano = Number(document.getElementById("year").value);
    if(!ano || ano > ano_atual){
        window.alert('[ERRO] Verifique as informações e tente novamente!');
    }
}