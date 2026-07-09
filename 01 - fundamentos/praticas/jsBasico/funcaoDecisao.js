let resultado = classificarNota(100);
console.log(resultado);

function classificarNota(nota){
    if(nota < 50){
        return"Reprovado";
    } else if(nota >=50 && nota<=69){
        return"Recuperação";
    } else {
        return"Aprovado";
    }
}