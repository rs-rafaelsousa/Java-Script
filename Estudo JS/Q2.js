const salarios = {
    Rafael: 9000,
    Luan: 7500,
    Gelado: 6000,
    Vini: 8500
};

let somaTotal = 0;

for (let pessoa in salarios) {
    somaTotal += salarios[pessoa];
}

console.log(`A soma total dos salários é: R$ ${somaTotal}`);
