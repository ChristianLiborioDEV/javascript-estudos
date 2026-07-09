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

//Como saber as chaves que temos em um objeto
//Podemos usar Object.keys

//Object.keys() retorna um array com as chaves, igual ao for in
//Ja o Object.values() retorna um array de valores
//Object.entries retorna um array em abas posições, sendo a chave e o valor

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);



//metodo de array para buscar uma informação
if (!chavesObjeto.includes("casa")){
    console.error("É necessério ter um endereço cadastrado")
}