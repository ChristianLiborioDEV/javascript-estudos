let numeros = [8,3,25,14,6,19];
console.log(resumoArray(numeros));

function resumoArray(array){
    let maior = array[0];
    let menor = array[0];
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
        if (array[i] > maior){
            maior = array[i];
        } else if (array[i]< menor){
            menor = array[i];
        }
    } return { maior: maior, menor: menor, soma: soma };
} 