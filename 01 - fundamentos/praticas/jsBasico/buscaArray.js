let frutas = ["maçã","banana","uva","laranja","manga"];
console.log(buscarFruta(frutas, "abacaxi"));

function buscarFruta(array, busca){
    for (let i = 0; i < array.length; i++) {
        if (busca === array[i]){
            return true;
        }
    }       return false;

}