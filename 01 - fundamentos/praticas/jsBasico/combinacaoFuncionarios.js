let funcionarios = [
    { nome: "Ana", setor: "TI", salario: 4500 },
    { nome: "Bruno", setor: "RH", salario: 3200 },
    { nome: "Carla", setor: "TI", salario: 5100 },
    { nome: "Diego", setor: "RH", salario: 2800 },
    { nome: "Eva", setor: "TI", salario: 4800 }
];

console.log(analisarSetor(funcionarios, "TI"));

function analisarSetor(array, setor){
    let totalFuncionarios = 0;
    let mediaSalarial = 0;
    let maiorSalario = 0;
    for(let i in array){
        if(array[i].setor == setor ){
            totalFuncionarios++;
            mediaSalarial += array[i].salario;

            if(array[i].salario > maiorSalario){
                maiorSalario = array[i].salario;
                
            } 
        }   
    }  mediaSalarial = mediaSalarial/totalFuncionarios;     
    return {total: totalFuncionarios , mediaSalarial: mediaSalarial, maiorSalario: maiorSalario};
}

/* Muito bom. Resolveu sozinho, lógica correta, resultado certo.
Dois detalhes já conhecidos:
1. let maiorSalario = [0] — array em vez de número. Já caiu nessa antes. Usa 0 ou array[0].salario.
2. array[i].setor == setor — prefira === no lugar de ==. O === compara valor e tipo, o == faz conversões automáticas que podem causar bugs difíceis de rastrear. Em JavaScript, === é o padrão profissional.
Fora isso, exercício limpo e bem estruturado.*/