import input from 'readline-sync';

console.log('Aplicação de Juros:\n')

let valorJuros = '';
let totalDivida = '';
let infoJuros = '';

let valor = input.question('Informe o valor devido: R$ ');

if(valor > 0){
    let dias = input.question('Informe quantos dias se passaram desde o vencimento do boleto: ');
    if(dias > 0){
        if(dias > 15){
            infoJuros = 10;
        }else{
            infoJuros = 5;
        }
        valorJuros = (valor/100)*infoJuros;
        totalDivida = Number(valor) + Number(valorJuros);

        console.log('\nValor original da dívida: R$ '+valor);
        console.log('Dias atrasados: '+dias);
        console.log('Taxa de Juros: '+infoJuros+'%');
        console.log('Valor total com juros: R$ '+totalDivida);
    }else{
        console.log('Você está em dia!')
    }
}else{
    console.log('O valor da dívida deve ser maior que zero!');
}


