let frutas = [];
let doces = [];
let laticinios = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim";
while(adicionarMais != "não"){
    if(frutas.length === 0 && doces.length === 0 && laticinios.length === 0){
        adicionarMais = prompt('Você deseja adicionar uma comida na lista de compras? Responda "sim" ou "não".');
    } else {
        adicionarMais = prompt('Você deseja adicionar uma comida na lista de compras? Responda "sim", "não" ou "remover".');
    }

    while(adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover"){
        alert("Operação não reconhecida!");
        adicionarMais = prompt('Você deseja adicionar uma comida na lista de compras? Responda "sim" ou "não".');
    }

    if(adicionarMais == "não"){
        break;
    }

    if(adicionarMais == "sim"){
        comida = prompt('Qual comida você deseja inserir?');
        categoria = prompt('Em qual categoria essa comida se encaixa: "frutas", "laticínios" ou "doces"?');
        if(categoria == "frutas"){
            frutas.push(comida);
        } else if(categoria == "doces"){
            doces.push(comida);
        } else if(categoria == "laticínios"){
            laticinios.push(comida);
        } else {
            alert('Essa categoria não identificada!');
        }         
    } else if(adicionarMais == "remover"){
        if(frutas.length === 0 && doces.length === 0 && laticinios.length === 0){
            alert('A lista está vazia!');
        } else {
            remover = prompt('Lista de compras: Frutas: '+frutas+'/ Laticínios: '+laticinios+'/ Doces: '+doces);
            if(frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert('O item '+remover+' foi removida com sucesso!');
            } else if(laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert('O item '+remover+' foi removido com sucesso!');
            } else if(doces.indexOf(remover) != -1){
                doces.splice(doces.indexOf(remover), 1);
                alert('O item '+remover+' foi removido com sucesso!');
            } else {
                alert('Não foi possível encontrar o item dentro da lista!');
            }  
        }
    }

}

alert(`Lista de compras: Frutas: ${frutas} /Laticínios: ${laticinios} /Doces: ${doces}`);
