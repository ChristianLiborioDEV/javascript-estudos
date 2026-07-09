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
}


// Js tem uma dificuldade em mostrar objetos, diferente de outros tipos de variavel

for (let chave in estudante){
    const tipo = typeof estudante[chave];
    if(tipo !== "object" && tipo !=="function"){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}