let precos = [100,250,80,320,150];
let desconto = 10;
let precosComDesconto = [];
let auxilio = [];

for (let i = 0; i < precos.length; i++) {
    somarDesconto(i);
} console.log(precosComDesconto);


function somarDesconto(indice){
    precosComDesconto.push(precos[indice] - (precos[indice] * desconto / 100));
}

    