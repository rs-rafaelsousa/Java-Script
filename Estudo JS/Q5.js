const estoque = {
    "Produto A": 10,
    "Produto B": 5,
    "Produto C": 20,
    "Produto D": 8
};

// Função para simular a venda de produtos
function venderProduto(produto) {
    if (estoque[produto] > 0) {
        estoque[produto]--;
        console.log(`Vendido: ${produto}. Estoque restante: ${estoque[produto]}`);
    } else {
        console.log(`O produto ${produto} está esgotado.`);
    }
}

// Simulação de vendas
const produtosParaVender = ["Produto A", "Produto B", "Produto C", "Produto A", "Produto D", "Produto B", "Produto E"];

for (let produto of produtosParaVender) {
    venderProduto(produto);
}

console.log("Estoque final:", estoque);
