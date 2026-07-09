let numeros = [10,25,8,42,15];

function somarArray(a){
    var total = 0;
    for (let i = 0; i < a.length; i++) {
    total = total + a[i];
    } return total;
} 
console.log(somarArray(numeros));



