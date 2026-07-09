let produtos = [
    { nome: "Teclado", preco: 150, disponivel: true },
    { nome: "Mouse", preco: 80, disponivel: false },
    { nome: "Monitor", preco: 900, disponivel: true },
    { nome: "Headset", preco: 200, disponivel: false },
    { nome: "Webcam", preco: 350, disponivel: true }
];


let nomesProdutos = produtos.map(produto => produto.nome);
console.log(nomesProdutos);

let produtosDisponiveis = produtos.filter(produto => produto.disponivel === true);
console.log(produtosDisponiveis);

let produtoValorProcurado = produtos.find(produto => produto.preco < 200);
console.log(ProdutoValorProcurado);







/* Você nomeou esse argumento de produto — podia ser qualquer nome, p, item, x. É só um apelido pro elemento atual.
volta 1: produto = { nome: "Teclado", preco: 150, disponivel: true }
         produto.nome = "Teclado" ✓

volta 2: produto = { nome: "Mouse", preco: 80, disponivel: false }
         produto.nome = "Mouse" ✓

volta 3: produto = { nome: "Monitor", ... }
         produto.nome = "Monitor" ✓
... */