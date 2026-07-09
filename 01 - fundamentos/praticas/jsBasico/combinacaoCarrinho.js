let carrinho = [
    { produto: "Camiseta", preco: 59.90, quantidade: 2 },
    { produto: "Calça", preco: 120.00, quantidade: 1 },
    { produto: "Tênis", preco: 280.00, quantidade: 1 },
    { produto: "Meia", preco: 15.90, quantidade: 3 }
];


console.log(resumoCarrinho(carrinho));

function resumoCarrinho(array){
    let totalItens = 0;
    let subTotal = 0;
    let desconto = 10;
    let total = 0;
    for(let i in array){
        totalItens += array[i].quantidade;
        subTotal += array[i].quantidade * array[i].preco;
             
} 
        if (subTotal > 300){
            desconto = subTotal * desconto/100;
            total = subTotal - desconto;
            
        } else {
            total = subTotal;
        } 
        return {totalItens: totalItens, subTotal: subTotal, desconto: desconto, total: total};
} 


/* let desconto = 0;
// depois:
if (subTotal > 300) {
    desconto = subTotal * 0.10;
} */