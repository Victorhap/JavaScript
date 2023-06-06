let jogador = 'X';
let jogadas = ['','','','','','','','',''];

function clicar(n){
    let permissao = validaCampo(jogadas[n])

    if(permissao){
        jogadas[n] = jogador
        document.getElementsByClassName('quadrado')[n].innerHTML = jogador;
        jogador = jogador == 'X' ? 'O' : 'X'; 
    }else{
        alert('erro')
    }

}

function validaCampo(campo){

    let result = true;

    if (campo != '') result = false;
    return result;

}

function vitoria(){
    
}