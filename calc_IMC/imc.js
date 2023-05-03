import entradaDados from 'readline-sync';

console.log("calculadora de IMC: \n");

let peso = entradaDados.question("Informar peso (ex: 70): ");
let altura = entradaDados.question("Informar altura (ex: 1.70): ");

let imc = (peso / (altura*altura)).toFixed(2);

console.log("O IMC é: "+imc);