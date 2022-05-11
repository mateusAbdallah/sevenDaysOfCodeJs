let stringUm = "1";
let numeroUm = 1;
let stringTrinta = "30";
let numeroTrinta = 30;
let stringDez = "10";
let numeroDez = 10;


if (numeroDez === stringDez){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (stringTrinta == numeroTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

let nomeUsuario = prompt('Qual o seu nome?');
let idadeUsuario = prompt('Qual sua idade?');
let linguagemQueEstuda = prompt('Qual linguagem de programação você está estudando?');

let resultadoPerguntas = console.log ("Olá "+nomeUsuario+", você tem "+idadeUsuario+" e estuda a linguagem "+ linguagemQueEstuda);

let perguntaEstudo = prompt("Você gosta de estudar "+ linguagemQueEstuda+" ?");



