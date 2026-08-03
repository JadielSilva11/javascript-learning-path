function criarSaudacao(nome){
    return function(){
        console.log(`Olá, ${nome}`);
    }
}

const saudacao = criarSaudacao("Jadiel");
saudacao();

function contar(){
    let num = 10;

    return function(){
        num++;
        console.log(num);
    }
}

const contador = contar();
contador();
contador();

function multiplicador(valor){
    return function(num){
        console.log(num * valor);
    }
}

const quadriplicar = multiplicador(4);
quadriplicar(20);