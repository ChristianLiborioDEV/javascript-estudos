let vendas = [
    {produto: "Teclado", quantidade: 3, preco: 150},
    {produto: "Mouse", quantidade: 5, preco: 80},
    {produto: "Monitor", quantidade: 1, preco: 900},
    {produto: "Headset", quantidade: 2, preco: 200}
];


console.log(resumoVendas(vendas));


function resumoVendas(array){
    let total = 0;
    let maiscaro = [];
    let maior = [0];
    let quantidadeItens = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].preco > maior){
            maior = array[i].preco;
            maiscaro = array[i].produto;
        }  
        total += array[i].quantidade*array[i].preco;
        quantidadeItens += array[i].quantidade;
    
    }  return {totalVendido: total, ProdutoMaisCaro: maiscaro, totalItens: quantidadeItens}
}

/* 1. let maior = [0] cria um array em vez de um número. Funcionou por acidente igual antes — JavaScript comparou e converteu. O correto é let maior = 0 ou melhor ainda let maior = array[0].preco.
2. ProdutoMaisCaro com P maiúsculo — o padrão em JavaScript é camelCase começando minúsculo: produtoMaisCaro.
Fora isso, exercício limpo. Você aplicou tudo sozinho — laço, objeto, acumulador e comparação de maior valor. Isso é consistência.*/