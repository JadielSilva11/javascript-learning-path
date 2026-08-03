const users = [
    {
        nome: "Ana",
        idade: 20
    },
    {
        nome: "Pedro",
        idade: 25
    }
];

console.log(users[0].nome, users[1].idade);

const produtos = [
    {
        nome: "Mouse",
        preco: 50
    },
    {
        nome: "Teclado",
        preco: 100
    }
];

for(const produto of produtos){
    console.log(produto.nome);
}

const messages = [
    {
        texto: "Olá"
    },
    {
        texto: "Tudo bem?"
    }
];

for(const message of messages){
    console.log(message.texto);
}