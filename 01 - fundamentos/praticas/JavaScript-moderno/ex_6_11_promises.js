function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, nome: "Christian" });
            } else {
                reject("ID inválido");
            }
        }, 1000); // simula 1 segundo de espera
    });
}

exibirUsuario(0);

async function exibirUsuario(id){
    try{
        let usuario = await buscarUsuario(id);
        console.log(usuario);
    } catch (erro){
        console.log("Erro: ", erro)
    }
}



/* O problema
JavaScript executa uma linha por vez. Mas algumas operações demoram — buscar dados de uma API, ler um arquivo, consultar banco de dados. Se o código travasse esperando, a página inteira travaria junto.

A solução: código assíncrono
Em vez de travar e esperar, JavaScript continua executando e avisa quando o resultado chegou.
Promise é a representação de um valor que ainda não existe mas vai existir: */