let produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 }
];


let busca = produtos.map(({nome, preco}) => `${nome} - R$${preco}`);
console.log(busca)