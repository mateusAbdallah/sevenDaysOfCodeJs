let button = document.querySelector('button');
button.onclick = function(){
    let nomeUsuario = prompt('Qual o seu nome?');
    let idadeUsuario = prompt('Qual sua idade?');
    let linguagemQueEstuda = prompt('Qual linguagem de programação você está estudando?');
    let resultadoPerguntas = "Olá "+nomeUsuario+", você tem "+idadeUsuario+" anos"+" e estuda a linguagem "+ linguagemQueEstuda;
    alert(resultadoPerguntas);

    const gosta = prompt ('Você gosta de estudar '+linguagemQueEstuda+' ?' + ' Responda com o número 1 - SIM ou 2 - NÃO');
    if (gosta == 1){
        alert('Muito bom! Continue estudando e terá muito sucesso')
    }
    if (gosta == 2){
        alert('Aaah que pena...já tentou aprender outra linguagem?')
    }
}


