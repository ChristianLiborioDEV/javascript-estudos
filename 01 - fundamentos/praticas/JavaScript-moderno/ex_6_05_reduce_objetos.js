let pedidos = [
    { produto: "Teclado", valor: 150 },
    { produto: "Mouse", valor: 80 },
    { produto: "Monitor", valor: 900 }
];

let totalPedidos = pedidos.reduce((acc, n) => acc + n.valor, 0);
console.log(totalPedidos);


/* Exato. O segundo parâmetro é sempre o elemento atual do array — pode chamar de n, item, pedido, qualquer nome. O primeiro é sempre o acumulador.
E você aplicou certo: n.valor porque cada elemento é um objeto, e você precisa acessar a propriedade .valor.*/