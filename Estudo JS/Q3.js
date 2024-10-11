const alunos = {
    Rafael: 10,
    Luan: 9,
    Carlos: 8,
    Caio: 5
};

console.log("Alunos Aprovados:");

for(let nota in alunos){
    if(alunos[nota] >= 7){
        console.log(`${nota}: ${alunos[nota]}`);
        
    }
    
}