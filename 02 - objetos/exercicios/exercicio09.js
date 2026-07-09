/*3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais 
(marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.

ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está 
desligado. 

Observação: se o carro já está ligado (ligado = true), não pode ser ligado 
novamente e vice-versa.

obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro 
(marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens 
resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.*/


const carro = {
    marca: "volkswagem",
    modelo: "gol",
    ano: 2016,
    cor: "vermelho",
    ligado: false,
    ligar: function(){
    if(this.ligado === true){
        return "Carro ja esta ligado";
    } else {
        this.ligado = true;
        return "Carro ligou";
        }
    },
    desligar: function(){
    if(this.ligado === true){
        this.ligado = false;
        return "Carro desligou";
    } else {
        return "Carro ja esta desligado";
        }
    },
    obterDetalhes: function(){
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, 
    Cor: ${this.cor}, Ligado: ${this.ligado}`;
    }
}

console.log(carro.ligar());
console.log(carro.desligar());
console.log(carro.obterDetalhes());