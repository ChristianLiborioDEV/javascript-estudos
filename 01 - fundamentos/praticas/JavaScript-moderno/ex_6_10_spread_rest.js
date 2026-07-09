let compras1 = ["Teclado", "Mouse"];
let compras2 = ["Monitor", "Headset"];

let juntar = [...compras1,...compras2];
console.log(juntar);


//console.log(somarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9));

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(somarTodos(...numeros));


function somarTodos(...numeros){
    return numeros.reduce((acc, n) => acc + n, 0);
}








/* spread e rest.
Spread — expande um array ou objeto:
let a = [1, 2, 3];
let b = [4, 5, 6];
let juntos = [...a, ...b]; // [1, 2, 3, 4, 5, 6]


Rest — agrupa argumentos numa função:

function somar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}
somar(1, 2, 3, 4); // 10 */
