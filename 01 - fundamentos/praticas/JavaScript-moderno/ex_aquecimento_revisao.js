let pedidos = [
    { cliente: "Ana", valor: 120, pago: true },
    { cliente: "Bruno", valor: 350, pago: false },
    { cliente: "Carla", valor: 80, pago: true },
    { cliente: "Diego", valor: 500, pago: false }
];


let pedidosClientes = pedidos.filter(produto => produto.pago === false).map(nome => nome.cliente);
console.log(pedidosClientes);

/* produto.pago === false pode ser simplificado para !produto.pago. O ! inverte o booleano — se pago for false, !pago é true. */