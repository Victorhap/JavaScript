function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')




for (let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`);   
    }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
