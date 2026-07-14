const estudantes = require("./estudantes.json");

function filtrarPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

const listaEnderecosImcompletos = filtrarPorPropriedade(estudantes, "cep");
console.log(listaEnderecosImcompletos);


// O método hasOwnProperty busca dentro do array a propriedade e retorna um boolean