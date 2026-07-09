const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "11122233316",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5541999999999", "5541888888888"],
    media: 7.5,
    estaAprovado: function(mediaBase){
      return this.media >= mediaBase ? true : false 
    } 
}

console.log(estudante.estaAprovado(7));

