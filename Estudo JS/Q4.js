const pessoas = [
    { nome: 'Maria', idade: 18 },
    { nome: 'João', idade: 25 },
    { nome: 'Ana', idade: 42 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Lucas', idade: 15 },
    { nome: 'Carla', idade: 50 }
];

const agrupamento = {
    jovens: [],
    adultos: [],
    idosos: []
};

for (let pessoa of pessoas) {
    if (pessoa.idade <= 20) {
        agrupamento.jovens.push(pessoa.nome);
    } else if (pessoa.idade >= 21 && pessoa.idade <= 40) {
        agrupamento.adultos.push(pessoa.nome);
    } else {
        agrupamento.idosos.push(pessoa.nome);
    }
}

console.log(agrupamento);
