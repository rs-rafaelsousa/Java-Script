const notas = {
    Maria: 8.5,
    João: 7.0,
    Ana: 9.2,
    Pedro: 6.5,
    Lucas: 10.0
};

let maiorNota = -Infinity;
let menorNota = Infinity;
let alunoMaior = '';
let alunoMenor = '';

for (let aluno in notas) {
    if (notas[aluno] > maiorNota) {
        maiorNota = notas[aluno];
        alunoMaior = aluno;
    }
    if (notas[aluno] < menorNota) {
        menorNota = notas[aluno];
        alunoMenor = aluno;
    }
}

console.log(`A maior nota é de ${alunoMaior}: ${maiorNota}`);
console.log(`A menor nota é de ${alunoMenor}: ${menorNota}`);
