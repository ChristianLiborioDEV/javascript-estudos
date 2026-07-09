let numero = [3,15,7,22,10,18,5,11];
let maiores10 = [];
let auxiliar = 0;
for (let i = 0; i < numero.length; i++) {
    if(numero[i] > 10){
        maiores(i);
        auxiliar++;

    }  
} console.log(`Existem ${auxiliar} numeros maiores que 10 na lista!`);

function maiores(indice){
    maiores10.push(numero[indice]);
 
}