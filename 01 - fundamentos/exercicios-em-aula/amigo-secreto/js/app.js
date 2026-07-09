let nomes = [];

function adicionar(){
let nomeAmigo = document.getElementById('nome-amigo').value;
exibirNome(nomeAmigo);
nomes.push(nomeAmigo);
document.getElementById('nome-amigo').value = '';
}


function sortear(){
    if(nomes.length < 4){
        alert('Minimo 4 nomes para sortear');
        return;
    } 
    embaralha(nomes);
    let sorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < nomes.length; i++){
        if(i == nomes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + '-->' + nomes[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + '-->' + nomes[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    nomes = [];
}


function exibirNome(nome){
    if(nome == ''){
        alert('Campo vazio digite um nome válido!');
        } else if(nomes.includes(nome)){
        alert(`Já existe o nome ${nome} na lista!`);
        return;
            } 
            let listaNomes = document.getElementById('lista-amigos');
              if (listaNomes.textContent == ''){
                 listaNomes.textContent = nome;
               } else {
                 listaNomes.textContent = listaNomes.textContent + ', ' + nome;
         }
}
