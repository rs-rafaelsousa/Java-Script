function contarCaracteres(string) {
    const contador = {};

    for (let caractere of string) {
       
        if (contador[caractere]) {
            contador[caractere]++;
        } else {
           
            contador[caractere] = 1;
        }
    }

    return contador;
}

const resultado = contarCaracteres("exemplo");
console.log(resultado);
