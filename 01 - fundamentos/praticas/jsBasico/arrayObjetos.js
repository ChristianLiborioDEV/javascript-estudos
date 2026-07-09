let produtos = [
    {nome: "Teclado", preco:150},
    {nome: "Mouse", preco:80},
    {nome: "Monitor", preco:900}
]

/*for(let pos in produtos){  
    console.log(`${produtos[pos].nome} - R$${produtos[pos].preco}`)
}*/

console.log(filtrarBaratos(produtos, 200))

function filtrarBaratos(array,precoLimite){
    let menores =[];
    for(let produto of array){
        if(produto.preco < precoLimite){
            menores.push(produto); 
        } 
    } return menores;
} 





 /* // for tradicional — mais controle
for (let i = 0; i < produtos.length; i++) { }

// for...of — mais limpo para arrays
for (let produto of produtos) {
    console.log(`${produto.nome} - R$${produto.preco}`);
}

// for...in — melhor para objetos, não arrays
for (let chave in objeto) { } */