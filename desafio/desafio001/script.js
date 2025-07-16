var hora = new Date().getHours();
var back = document.querySelector('body');
var informe = document.querySelector('div > p');
var imagem = document.querySelector('#imagem img');
if (hora >= 6 && hora < 12) {
    informe.innerHTML = `Agora são ${hora} horas, bom dia!`;
    imagem.src = 'imagens/bom_dia.jpg';
    imagem.alt = 'imagem de bom dia';
}else if(hora >= 12 && hora < 18) {
    informe.innerHTML = `Agora são ${hora} horas, boa tarde!`;
    imagem.src = 'imagens/boa_tarde.jpg';
    imagem.alt = 'imagem de boa tarde';
    back.style.backgroundColor = 'rgba(240, 167, 9, 0.97)'; // Cor de fundo para a tarde

}
else if(hora >= 18 && hora < 24) {
    informe.innerHTML = `Agora são ${hora} horas, boa noite!`;
    imagem.src = 'imagens/boa_noite.jpg';
    imagem.alt = 'imagem de boa noite';
    back.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Cor de fundo para a noite;
}else{
    informe.innerHTML = `Agora são ${hora} horas, boa madrugada!`;
    imagem.src = 'imagens/boa_noite.jpg'; // Usando a mesma imagem de bom dia para a madrugada
    back.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Cor de fundo para a madrugada

}