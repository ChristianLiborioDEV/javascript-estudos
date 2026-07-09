let msg = document.getElementById("msg");
let img = document.getElementById("imagem");
var data = new Date();
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.` 

function carregar(){
    if (hora >=0 && hora < 12){
        img.src = "manhã.png"
        document.body.style.background = "#AE8846"
} else if (hora >= 12 && hora <= 18){
        img.src = "tarde.png"
        document.body.style.background = "#81819E"
    } else {
        img.src = "noite.png"
        document.body.style.background = "#2E222C"
    }
}

