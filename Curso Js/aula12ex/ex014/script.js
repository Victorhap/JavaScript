function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.backgroundColor = '#B79F26'
    }else if (hora >=12 && hora <18) {
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.backgroundColor = '#A16B4A'
    }else {
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.backgroundColor = '#0A191C'
    }
}