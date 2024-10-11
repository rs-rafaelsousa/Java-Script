const produtos = {
    "Produto A": 150,
    "Produto B": 80,
    "Produto C": 200,
    "Produto D": 120,
    "Produto E": 60
};

const produtosCaros = {};

for (let produto in produtos) {
    if (produtos[produto] > 100) {
        produtosCaros[produto] = produtos[produto]; // Adiciona ao novo objeto
    }
}

console.log("Produtos com preço acima de R$ 100:", produtosCaros);
