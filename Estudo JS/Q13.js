const notasAlunos = {
    Maria: [8, 9, 7.5],
    João: [6, 7, 8],
    Ana: [9, 8.5, 10],
    Pedro: [5, 6, 4],
    Lucas: [7, 8, 9]
};

for (let aluno in notasAlunos) {
    const notas = notasAlunos[aluno];
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    
    console.log(`A média de ${aluno} é: ${media.toFixed(2)}`);
}
