let produtos = [
    {nome: "Teclado", preco:150, quantidade: 4},
    {nome: "Mouse", preco:80, quantidade: 10},
    {nome: "Monitor", preco:900, quantidade: 2}
]


console.log(calcularEstoque(produtos));

function calcularEstoque(array){
    let soma = 0;
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        soma = array[i].preco * array[i].quantidade;
        total += soma


    }return total;
}   