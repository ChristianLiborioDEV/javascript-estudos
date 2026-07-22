/*Contexto: você está construindo um sistema de cadastro de usuários.

Escreva três versões da mesma função — uma como
function declaration, uma como function expression
e uma como arrow function:

A função recebe um nome e uma idade, e retorna a string:
"Usuário: Ana | Idade: 25"

(substituindo pelos valores recebidos, claro) */


console.log(saudacao("Ana", 25));
function saudacao(nome, idade){
    return `Usuário: ${nome} | Idade: ${idade}`
}


const saudacaoArrow = (nome2, idade2) => `Usuário: ${nome2} | Idade: ${idade2}`;
console.log(saudacaoArrow("Bia", 26))


const saudacaoDeclaration = function (nome2, idade2) {
    return `Usuário: ${nome2} | Idade: ${idade2}`
}
console.log(saudacaoDeclaration("Jessica", 40));