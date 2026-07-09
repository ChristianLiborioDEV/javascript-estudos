let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multiplicar = numeros.map(n => n * 3);
console.log(multiplicar)

let pares = numeros.filter(n => n % 2 === 0);
console.log(pares)

let primeiro = numeros.find(n => n > 6);
console.log(primeiro)




/*.map() — percorre o array e transforma cada elemento, retornando um novo array:
let dobrados = numeros.map(n => n * 2);
// [2, 4, 6, 8, ...]



.filter() — percorre o array e retorna apenas os elementos que passam numa condição:
let pares = numeros.filter(n => n % 2 === 0);
// [2, 4, 6, 8, 10]



.find() — retorna o primeiro elemento que passa na condição, não um array:
let primeiro = numeros.find(n => n > 6);
// 7
A lógica dentro de cada um é a mesma que você já usou nos laços — a diferença é que esses métodos fazem o laço por baixo pra você, deixando o código mais limpo.

Agora tenta o exercício com isso em mente. */

/* .map() — transforma, sempre retorna array do mesmo tamanho
.filter() — filtra, retorna array menor
.find() — busca, retorna um elemento
.reduce() — acumula, retorna um único valor */