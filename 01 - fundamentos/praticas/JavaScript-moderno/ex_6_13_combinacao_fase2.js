let funcionarios = [
    { nome: "Ana", setor: "TI", salario: 4500, ativo: true },
    { nome: "Bruno", setor: "RH", salario: 3200, ativo: false },
    { nome: "Carla", setor: "TI", salario: 5100, ativo: true },
    { nome: "Diego", setor: "RH", salario: 2800, ativo: true },
    { nome: "Eva", setor: "TI", salario: 4800, ativo: false }
];

let combinacao = funcionarios.filter(ativos => ativos.ativo && ativos.setor === "TI").map(nomes => `${nomes.nome} - R$ ${nomes.salario}`);
console.log(combinacao);