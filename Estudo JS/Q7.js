const salarios = {
    Maria: 3000,
    João: 2500,
    Ana: 4000,
    Pedro: 3500,
    Lucas: 2800
};

let somaSalarios = 0;
let totalFuncionarios = 0;

for (let funcionario in salarios) {
    somaSalarios += salarios[funcionario];
    totalFuncionarios++;
}

const mediaSalarial = somaSalarios / totalFuncionarios;

console.log(`A média salarial é: R$ ${mediaSalarial.toFixed(2)}`);
