/*Contexto: sistema de e-commerce, função que gera uma descrição de produto.

Crie uma arrow function chamada 'descreverProduto' que recebe:
- nome (obrigatório)
- preco (obrigatório)
- categoria (opcional, default: "Geral")
- ...tags (rest parameter — palavras-chave do produto)

E retorna:
"[Eletrônicos] Notebook — R$3500 | Tags: importado, promoção"

Ou, sem tags:
"[Geral] Camiseta — R$89 | Tags: nenhuma" */

const descreverProduto = (nome, preco, categoria = "Geral", ...tags) => {
    let tagExiste = tags.join(", ")
    if(tagExiste === ""){
        tagExiste = "nenhuma"
    }
    return `[${categoria}] ${nome} - R$${preco} | Tags: ${tagExiste}`
    
}

console.log(descreverProduto("Notebook", 3500, "Eletrônicos", "importado", "promoção"))
console.log(descreverProduto("Camiseta", 89, undefined))

/*Além disso, existe uma forma mais compacta de escrever essa lógica com ternário — você vai usar muito isso com arrow functions:

javascript
const tagsFormatadas = tags.length > 0 ? tags.join(", ") : "nenhuma"; */