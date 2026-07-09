let alunos = [
    {nome: "Ana", notas:[8,7,9]},
    {nome: "Bruno", notas:[5,6,4]},
    {nome: "Carla", notas:[10,9,8]},
    {nome: "Diego", notas:[3,5,4]},
];

console.log(relatorioAlunos(alunos))

function relatorioAlunos(array){
    let resultado = 0;
 for (let i = 0; 1 < array.length; i++) {
    for (let i = 0; i < 3; i++) {
        resultado += array[i].notas[1];
        console.log(resultado)
        
    }
    

 }
}


//resultado += array[i].notas[2]; 
     //  console.log(resultado);
      //  console.log(array[i].notas);