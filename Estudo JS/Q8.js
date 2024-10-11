const listaCompras = [
    { produto: 'Maçã', quantidade: 4 },
    { produto: 'Banana', quantidade: 6 },
    { produto: 'Leite', quantidade: 2 },
    { produto: 'Pão', quantidade: 5 },
    { produto: 'Ovos', quantidade: 12 }
];

let totalItens = 0;

for (let item of listaCompras) {
    totalItens += item.quantidade;
}

console.log(`Total de itens a serem comprados: ${totalItens}`);
