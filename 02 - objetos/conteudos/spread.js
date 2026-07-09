const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "11122233345",
    turma: "JavaScript",
    bolsista: true,
    telefone: ["123456789","987654321"],
    enderecos: [{
        rua: "Rua Joseph Climber",
        numero: "45",
        complemento: "apto 43"
    },{
        rua: "Rua Dona Clotilde",
        numero: "71",
        complemento: null
    }]
};

function exibirTelefones(telefone1, telefone2){
    console.log(`ligar para ${telefone1}`)
    console.log(`ligar para ${telefone2}`)

};





//Aqui fazemos de maneira chumbada, fixo os indices, o que não é uma boa pratica
exibirTelefones(estudante.telefone[0], estudante.telefone[1]);



//Ja o spread permite fazermos sem chumbar indice, mais flebilixade e manuseabilidade
//Ele espalha o array dentro da função
exibirTelefones(...estudante.telefone);


//Exemplo de uso
//conseguimos montar parte de objetos com o spread
//virando assim somente 1 objeto

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);


//spread operator, também conhecido como sintaxe de espalhamento ou operador de 
// espalhamento. Este operador copia as propriedades de objetos para outros, 
// “espalhando” os conteúdos