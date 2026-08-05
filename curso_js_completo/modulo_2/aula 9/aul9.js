const produto = {
    nome: "Monitor",
    preco: 900
};

console.log(Object.keys(produto));

const chat = {
    id: 1,
    cliente: "Ana",
    status: "Aberto"
};

for(const chave of Object.keys(chat)){
    console.log(chave);
}

const vazio = {};
console.log(Object.keys(vazio));