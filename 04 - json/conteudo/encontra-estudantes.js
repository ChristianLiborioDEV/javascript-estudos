const estudantes = require("./estudantes.json");

function buscaInformacao(lista, chave, valor){
    return lista.find((estudante) => estudante[chave] === valor);
}

const estudanteEncontrado = buscaInformacao(estudantes, "nome", "Juliet");
console.log(estudanteEncontrado);


//.includes() precorre dados do array e caso haja um array dentro do array
//percorre tbm dentro dele entao aqui ficaria estudante[chave].includes(valor);