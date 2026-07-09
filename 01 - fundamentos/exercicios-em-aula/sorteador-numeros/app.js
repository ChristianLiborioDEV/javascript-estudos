function sortear() {
let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);
let numero;

let sorteados = [];

for (let i = 0; i < quantidade; i++){
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
       
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
    }


    let resultado = document.getElementById('resultado');
    exibirMensagem('resultado', `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`);
    alterarStatusBotao();
}

    function alterarStatusBotao() { 
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function exibirMensagem(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    exibirMensagem('resultado', `<label class="texto_paragrafo">Números sorteados:  nenhum até agora</label>`);
    alterarStatusBotao();
}