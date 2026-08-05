const produto = {
    nome: "Monitor",
    preco: 900
};

console.log(Object.entries(produto));

const chat = {
    id: 1,
    cliente: "Ana",
    status: "ABERTO"
};

for(const item of Object.entries(chat)){
    console.log(item);
}

const vazio = {};
console.log(Object.entries(vazio));