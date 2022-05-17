const button = document.querySelector('button');
button.onclick = function(){
    let areaDesejada = prompt('Qual área você quer seguir: Back-End ou Front-End?');
    if(areaDesejada == 'Front-End'){
        alert('Interessante aprender ReactJS ou VueJS.');
    }
    else if(areaDesejada == 'Back-End'){
        alert('Interessante aprender C# ou Java.');
    }
    else {
        alert('Você não inseriu uma área valida!');
    }
    
    let independenteDaArea = alert('Independente da área, você pode se especializar na área escolhida ou tornar-se um desenvolvedor Full-Stack.');
    

    
    let index = 0;
    while(index < 3){
        let tecnologiaDesejada = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');
        if(tecnologiaDesejada == "PHP"){
            alert('Excelente tecnologia para desenvolvimento Web.');
        }
        if(tecnologiaDesejada == "Python"){
            alert('Ótima tecnologia para manipular grande quantidade de dados.');
        }
        if(tecnologiaDesejada == "C#"){
            alert('Ótima tecnologia para trabalhar com o Back-End.');
        }
        index++;
    }

}   

