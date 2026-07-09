let biblioteca = [
    { titulo: "Clean Code", autor: "Robert Martin", paginas: 431, lido: true },
    { titulo: "You Don't Know JS", autor: "Kyle Simpson", paginas: 278, lido: false },
    { titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", paginas: 472, lido: true },
    { titulo: "HTML & CSS", autor: "Jon Duckett", paginas: 490, lido: false },
    { titulo: "O Programador Pragmático", autor: "Andrew Hunt", paginas: 352, lido: true }
];

console.log(relatorioLeitura(biblioteca));

function relatorioLeitura(array){
    let totalLidos = 0;
    let totalNaoLidos = 0;
    let paginasLidas = 0;
    let proximoLivro = "";

    for(let i in array){
        
        if(array[i].lido === true){
            totalLidos++;
            paginasLidas += array[i].paginas;
        } else {
            totalNaoLidos++;
            if (proximoLivro === ""){
        proximoLivro = array[i].titulo;
        } 
     } 
  } return {totalLidos: totalLidos, totalNaoLidos: totalNaoLidos, paginasLidas: paginasLidas, proximoLivro: proximoLivro};
}

/* Um único refinamento: a condição if (totalNaoLidos === 1) para pegar o primeiro não lido funciona, mas é uma solução indireta. O mais claro seria verificar se proximoLivro ainda está vazio:
javascriptif (proximoLivro === "") {
    proximoLivro = array[i].titulo;
}
Mesma lógica, intenção mais explícita. */