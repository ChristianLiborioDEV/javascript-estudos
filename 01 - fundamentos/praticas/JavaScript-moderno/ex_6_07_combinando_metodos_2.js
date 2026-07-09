let alunos = [
    { nome: "Ana", nota: 8.5, turma: "A" },
    { nome: "Bruno", nota: 5.0, turma: "B" },
    { nome: "Carla", nota: 9.2, turma: "A" },
    { nome: "Diego", nota: 6.8, turma: "B" },
    { nome: "Eva", nota: 7.5, turma: "A" }
];

let busca = alunos.filter(sala => sala.turma === "A").map(aluno => aluno.nome);
console.log(busca);