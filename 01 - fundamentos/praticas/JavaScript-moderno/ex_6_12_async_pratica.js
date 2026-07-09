function buscarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produtos = {
                1: { nome: "Teclado", preco: 150 },
                2: { nome: "Mouse", preco: 80 }
            };
            if (produtos[id]) {
                resolve(produtos[id]);
            } else {
                reject("Produto não encontrado");
            }
        }, 1000);
    });
}

exibirProduto(1);

async function exibirProduto(id){
    try{
        let produto = await buscarProduto(id);
        console.log(`Produto: ${produto.nome} — R$ ${produto.preco}`);
    } catch (erro) {
        console.log(erro);
    }
} 