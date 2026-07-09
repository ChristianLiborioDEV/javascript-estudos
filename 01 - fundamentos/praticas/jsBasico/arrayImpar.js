let numeros = [4,9,2,15,7,11,3];

console.log(filtrarImpares(numeros));

function filtrarImpares(array){
    let impares = [];
    for(let i in array){
        if(array[i]%2 == 1)
            impares.push(array[i])
    }   
    return impares;
}