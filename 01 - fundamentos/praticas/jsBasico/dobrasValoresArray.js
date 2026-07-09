let numeros = [3,7,12,5,20];
console.log(dobrarValores(numeros, 2));

function dobrarValores(array, multiplicador){
    var dobroArray = [];
    for (let i = 0; i < array.length; i++) {
        dobroArray.push(multiplicador*array[i]);
    } return dobroArray;
}