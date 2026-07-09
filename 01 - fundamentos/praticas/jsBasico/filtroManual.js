let numeros = [5,32,18,7,45,11,28];
console.log(filtrarMaiores(numeros, 15))

function filtrarMaiores(array, limite){
    var maiores = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > limite){
            maiores.push(array[i]);
        }
    } return maiores;
}