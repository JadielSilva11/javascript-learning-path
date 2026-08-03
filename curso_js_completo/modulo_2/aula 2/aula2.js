const messages = [];

messages.push("Olá");
messages.push("Tudo bem?");
messages.push("Preciso de ajuda");

console.log(messages);


const chats = [
    "Chat 1",
    "Chat 2",
    "Chat 3"
];

chats.pop();
console.log(chats);

const fila = [
    "Cliente 2",
    "Cliente 3"
];

fila.unshift("Cliente 1");
console.log(fila);
fila.shift();
console.log(fila);