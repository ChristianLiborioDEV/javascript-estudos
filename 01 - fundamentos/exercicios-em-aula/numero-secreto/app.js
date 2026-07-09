alert("Boas vindas ao jogo do número secreto!");
alert("Aqui e onde a brincadeira começa e a mãe chora!")
let numeroJogo = prompt("Até quantos numeros você gostaria de jogar?")
let numeroSecreto = Math.floor(Math.random() * numeroJogo) + 1;
alert(`Buenas sortes seu jogo foi definido com ${numeroJogo}`)
let numeroFalado;
let tentativa = 1;

while(numeroSecreto != numeroFalado){
   numeroFalado = prompt(`Escolha um numero entre 1 e ${numeroJogo}`);
    if(numeroSecreto == numeroFalado){
        break;
         } else {     
              if(numeroSecreto > numeroFalado){
                alert(`O numero secreto é maior que ${numeroFalado}`);
                   } else {           
                alert(`O numero secreto é menor que ${numeroFalado}`);
        }  
        tentativa++;
    }
}
let texto = tentativa > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o numero é ${numeroSecreto} e foram ${tentativa} ${texto}!`);
