function contarCaracteresPorPalavra(palavras) {
    const resultado = {};

    for (let palavra of palavras) {
        resultado[palavra] = palavra.length;
    }

    return resultado;
}

const palavras = ["maçã", "banana", "laranja", "abacaxi"];
const contagem = contarCaracteresPorPalavra(palavras);

console.log(contagem);
