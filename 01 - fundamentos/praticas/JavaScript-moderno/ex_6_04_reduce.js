let vendas = [150, 80, 900, 200, 350];

let total = vendas.reduce((produto, n) => produto + n, 0);
console.log(total);



/* O .reduce() percorre o array e vai acumulando um resultado. É o substituto moderno do acumulador que você fazia com laço. 

let numeros = [1, 2, 3, 4];
let soma = numeros.reduce((acumulador, n) => acumulador + n, 0);
// 0 é o valor inicial do acumulador
// resultado: 10

A cada volta: acumulador guarda o resultado até agora, n é o elemento atual.
*/