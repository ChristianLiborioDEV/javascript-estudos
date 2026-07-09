let produto = {
    nome: "Teclado",
    preco: 150,
    quantidade: 4,
    disponivel: true
};

let {nome, preco} = produto;
console.log(nome, preco);


/* destructuring — uma forma mais limpa de extrair valores de objetos e arrays.
Sem destructuring: 
let pessoa = { nome: "Ana", idade: 25 };
let nome = pessoa.nome;
let idade = pessoa.idade;


Com destructuring:
let { nome, idade } = pessoa;
Mesmo resultado, menos código. */