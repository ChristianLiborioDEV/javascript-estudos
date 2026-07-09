let funcionarios = [
    { nome: "Ana", setor: "TI", salario: 4500 },
    { nome: "Bruno", setor: "RH", salario: 3200 },
    { nome: "Carla", setor: "TI", salario: 5100 },
    { nome: "Diego", setor: "RH", salario: 2800 },
    { nome: "Eva", setor: "TI", salario: 4800 }
];


let somaSetor = funcionarios.filter(produto => produto.setor == "TI").reduce((acc, n) => acc + n.salario, 0);
console.log(somaSetor);