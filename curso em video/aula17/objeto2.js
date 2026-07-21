let amigo = {
    nome: 'Jadiel',
    altura: 175,
    idade: 20,
    crescer(a){
        console.log('Você cresceu')
        this.altura += a
    }
}

console.log(amigo)

amigo.crescer(5)

console.log(amigo)