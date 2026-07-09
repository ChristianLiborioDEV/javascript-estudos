let pessoa = {nome: "Christian", 
    idade: 26,
    cidade: "Curitiba",
    apresentar(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

pessoa.cidade = "Sitio Cercado"
pessoa.profissao = "Desenvolvedor"

console.log(pessoa.apresentar())

/* Um detalhe importante: dentro do objeto, ao invés de pessoa.nome e pessoa.idade, 
o correto é usar this.nome e this.idade. O this se refere ao próprio objeto — se 
você renomear a variável de pessoa para outra coisa, o método continuaria funcionando. */