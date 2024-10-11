const produtos = {
    "Produto A": 150,
    "Produto B": 80,
    "Produto C": 200,
    "Produto D": 120,
    "Produto E": 60
};

for (let produto in produtos) {
    if (produtos[produto] > 100) {
        produtos[produto] *= 0.85; // 15% de desconto
    }
}

console.log("Preços após o desconto:", produtos);
