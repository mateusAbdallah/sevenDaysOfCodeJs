const numeroCerto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){
    chute = prompt('Tente adivinhar um número de 0 a 10:');
    if(chute == numeroCerto){
        alert('Parabéns, você acertou! O número é '+numeroCerto);
        acertou = true;
        break;
    }
    alert('Errado!');
}
if(!acertou){
    alert('Infelizmente você não acertou! O número certo é '+numeroCerto);
}
