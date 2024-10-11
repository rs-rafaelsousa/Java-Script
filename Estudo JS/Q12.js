const estoque = {
    "Produto A": 3,
    "Produto B": 10,
    "Produto C": 2,
    "Produto D": 7,
    "Produto E": 4
};

for (let produto in estoque) {
    if (estoque[produto] < 5) {
        estoque[produto] += 10; // Adiciona 10 unidades
        console.log(`Reposto: ${produto}. Novo estoque: ${estoque[produto]}`);
    }
}

console.log("Estoque final:", estoque);
