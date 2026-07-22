let produtos = [45, 12, 89, 7, 134, 23];
let total = 0;
const valorMinimo = 20;
let produtosMais20 = 0;

for (let i = 0; i < produtos.length; i++){
    total += produtos[i];
    if(produtos[i] > valorMinimo) {
        produtosMais20++
    }
}

console.log(`Total: R$${total} | Produtos acima de R$20: ${produtosMais20}`)

//Ponto 1 — let vs const em arrays
/* Você usou let, mas produtos deveria ser const. Por quê?
const não significa "valor imutável" — significa "referência imutável".
Quando você declara um array com const, você está dizendo: "essa variável 
sempre vai apontar para esse mesmo array". O que está dentro do array pode mudar (push, pop, etc.) 
— o que não pode é fazer produtos = outra coisa. */
