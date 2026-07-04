// livro.js
const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoDePublicacao: 1954,
    genero: "Fantasia",
};

// Adicionando a propriedade idadePublicacao diretamente ao objeto livro
livro.idadePublicacao = anoAtual - livro.anoDePublicacao;

// Criando uma string com os detalhes do livro, incluindo a idade de publicação
livro.mostrarDetalhes = "Detalhes do Livro:\n" +                   
    "Título: " + livro.titulo + "\n" +                    
    "Autor: " + livro.autor + "\n" +                    
    "Ano de Publicação: " + livro.anoDePublicacao + "\n" +                      
    "Gênero: " + livro.genero + "\n" +
    "Idade de Publicação: " + livro.idadePublicacao + " anos";

// Exibindo os detalhes do livro no console
console.log(livro.mostrarDetalhes);