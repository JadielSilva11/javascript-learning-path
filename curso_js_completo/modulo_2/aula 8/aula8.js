const nomes = [
    "Pedro",
    "Ana",
    "Carlos"
];

console.log(nomes);
nomes.sort();
console.log(nomes);

const numeros = [30, 10, 20];

console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);
numeros.sort((a,b) => b - a);
console.log(numeros);