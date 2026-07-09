function comprar(){
    let lugar = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    if(lugar == 'pista'){
        comprarPista(quantidade);
    } if (lugar == 'superior'){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
    document.getElementById('qtd').value = 0;
}


function comprarPista(qtd){
    let pista = document.getElementById('qtd-pista').textContent;
    if(qtd > pista){
        alert(`Não foi possivel concluir a ação, numero excede as vagas da pista!`);
    } else {
        pista = pista - qtd;
        alert('Compra realizada com sucesso');
        document.getElementById('qtd-pista').textContent = `${pista}`;
    }
}

function comprarSuperior(qtd){
    let superior = document.getElementById('qtd-superior').textContent;
    if(qtd > superior){
        alert(`Não foi possivel concluir a ação, numero excede as vagas na area superior!`);
    } else {
        superior = superior - qtd;
        alert('Compra realizada com sucesso');
        document.getElementById('qtd-superior').textContent = `${superior}`;
    }
}

function comprarInferior(qtd){
    let inferior = document.getElementById('qtd-inferior').textContent;
    if(qtd > inferior){
        alert(`Não foi possivel concluir a ação, numero excede as vagas na area inferior!`);  
    } else {
        inferior = inferior - qtd;
        alert('Compra realizada com sucesso');
        document.getElementById('qtd-inferior').textContent = `${inferior}`;
    }
}
