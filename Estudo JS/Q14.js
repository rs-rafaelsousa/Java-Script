function contarVendas(vendas) {
    const contagem = {};

    for (let produto of vendas) {
        if (contagem[produto]) {
            contagem[produto]++;
        } else {
            contagem[produto] = 1;
        }
    }

    return contagem;
}

// Exemplo de uso com novos produtos
const vendas = ["Laptop", "Teclado", "Mouse", "Laptop", "Monitor", "Teclado", "Laptop"];
const resultado = contarVendas(vendas);

console.log(resultado);
