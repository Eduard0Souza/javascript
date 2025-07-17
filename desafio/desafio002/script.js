function verificar(){
    var data = new Date().getFullYear();
    var fano = window.document.getElementById("txtano");
    var res = window.document.getElementById("res");
    if (fano.value.length <= 3  || fano.value > data){
        window.alert("[ERRO] verifque a data e tente novamente!");
    }else{
        var fsex = document.getElementsByName("genero");
        var idade = data - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if(fsex[0].checked){
            genero = "Homem";
            if(idade == 1 ){
                     res.innerHTML = `Detectamos criança com ${idade} ano.`;
                     img.setAttribute('src', '../desafio002/imagens/menino.jpg')
            }
            else if(idade > 1 && idade < 12){//criança               
                res.innerHTML = `Detectamos criança com ${idade} anos.`;
                img.setAttribute('src', '../desafio002/imagens/menino.jpg')

            }else if( idade >=12 && idade < 18){//jovem
                res.innerHTML = `Detectamos ${genero} jovem com ${idade} anos.`;
                
                img.setAttribute('src', '../desafio002/imagens/jovem_masculino.png')
            }else if(idade >=18 && idade < 60){//adulto
                res.innerHTML = `Detectamos ${genero} atulto com ${idade} anos.`;
               
                img.setAttribute('src', '../desafio002/imagens/homem.jpg')
            }else{//idoso
                res.innerHTML = `Detectamos ${genero} idoso com ${idade} anos.`;
                
                img.setAttribute('src', '../desafio002/imagens/idoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = "Mulher";
            if(idade == 1 ){
                res.innerHTML = `Detectamos criança com ${idade} ano.`;
                 img.setAttribute('src', '../desafio002/imagens/menina.jpg')
            }
            else if(idade > 1 && idade < 12){//criança                
                res.innerHTML = `Detectamos criança com ${idade} anos.`;
                img.setAttribute('src', '../desafio002/imagens/menina.jpg')
            }else if(idade >=12 && idade < 18){//jovem
                res.innerHTML = `Detectamos ${genero} jovem com ${idade} anos.`;
                img.setAttribute('src', '../desafio002/imagens/jovem_feminino.png')
            }else if(idade >= 18 && idade < 60){//adulto
                res.innerHTML = `Detectamos ${genero} adulta com ${idade} anos.`;
                
                img.setAttribute('src', '../desafio002/imagens/mulher.jpg')
            }else{//idoso
                res.innerHTML = `Detectamos ${genero} idosa com ${idade} anos.`;
                
                img.setAttribute('src', '../desafio002/imagens/idosa.jpg')
            }
        }
        res.style.textAlign = "center";
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
         res.appendChild(img);

    }

   // window.alert(`O ano digitado foi ${fano.value}`);
}