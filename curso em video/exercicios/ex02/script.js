function check(){
    let data = new Date();
    let ano_atual = data.getFullYear();
    let ano = Number(document.getElementById("year").value);
    let res = document.getElementById("res");
    if(!ano || ano > ano_atual){
        window.alert('[ERRO] Verifique as informações e tente novamente!');
    } else{
        var idade = ano_atual - ano;
        var sex = document.getElementsByName("radsex");
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem';
            if(idade > 0 && idade <= 12){
                // criança
                img.setAttribute('src', 'img/crianca-m.avif')
            } else if(idade < 18){
                // jovem
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if(idade < 59){
                // adulto
                img.setAttribute('src', 'img/adulto-m.jpg')
            } else{
                // idoso
                img.setAttribute('src', 'img/idoso-m.jpeg')
            }
        } else{
            genero = 'Mulher';
            if(idade > 0 && idade <= 12){
                // criança
                img.setAttribute('src', 'img/crianca-f.jpg');
            } else if(idade < 18){
                // jovem
                img.setAttribute('src', 'img/jovem-f.jpg');
            } else if(idade < 59){
                // adulto
                img.setAttribute('src', 'img/adulto-f.avif');
            } else{
                // idoso
                img.setAttribute('src', 'img/idoso-f.jpeg');
            }
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `${genero} com ${idade} anos!`;
    res.appendChild(img)
}