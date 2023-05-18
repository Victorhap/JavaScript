function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length ==0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'fotomenino.jpg')
            }else if (idade<21){
                //jovem
                img.setAttribute('src', 'fotoHjovem.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'fotohomem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'fotomenina.jpg')
            }else if (idade<21){
                //jovem
                img.setAttribute('src', 'fotoMjovem.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'fotomulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'fotoidosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<p>`
        res.appendChild(img)
    }
}