function gerarTabuada(){
    var numero = parseInt(document.getElementById("numero").value);
    var limite = 10;
    if (isNaN(numero)){
        alert("?")
    } else {
    var res = document.getElementById("seltab");
    res.innerHTML = "";
    for (let i = 0; i <= limite; i++) {
        var item = document.createElement("option");
        item.text = `${numero}X${i}=${numero*i}`;
        item.value = `res${i}`;
        res.appendChild(item);
    }
}
}