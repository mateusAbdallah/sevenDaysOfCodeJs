let frutas = [];
let doces = [];
let laticinios = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";
while(adicionarMais != "não"){
    adicionarMais = prompt('Você deseja adicionar uma comida na lista de compra? Responda "sim" ou "não".');
    while(adicionarMais != "sim" && adicionarMais != "não"){
        alert('Operação não identificada!')
        adicionarMais = prompt('Você deseja adicionar uma comida na lista de compra? Responda "sim" ou "não".');
    }

    if(adicionarMais === "não"){
        break;
    }

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
}

alert('Lista de compras: Frutas: '+frutas+'/ Laticínios: '+laticinios+'/ Doces: '+doces);


