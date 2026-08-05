const produto = {
    nome: "Monitor",
    preco: 900
};

console.log(Object.values(produto));

const chat = {
    id: 1,
    cliente: "Ana",
    status: "Aberto"
};

for(const valor of Object.values(chat)){
    console.log(valor);
}

const vazio = {};
console.log(Object.values(vazio));