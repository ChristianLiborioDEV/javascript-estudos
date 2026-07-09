let alunos = [
    {nome: "Ana", notas:[8,7,9]},
    {nome: "Bruno", notas:[5,6,4]},
    {nome: "Carla", notas:[10,9,8]},
    {nome: "Diego", notas:[3,5,4]},
];

console.log(relatorioAlunos(alunos))

function relatorioAlunos(array){

for (let i = 0; i < array.length; i++) {
    let media = 0;
    for (let i2 = 0; i2 < array[i].notas.length; i2++) { 
        media += array[i].notas[i2]/array[i].notas.length; 
    } if (media >= 7){
        console.log(`${array[i].nome} - Média: ${media} - Aprovado`)
    }  else {
        console.log(`${array[i].nome} - Média: ${media} - Reprovado`)   } 
         
}
}

