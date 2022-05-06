function trocaImagemCarrossel() {
    const MAX = 1;

    var carrossel_image = document.querySelector('.carrossel img');
    var indice_imagem = carrossel_image.getAttribute('data-indice');


    if (indice_imagem == MAX) {
        carrossel_image.setAttribute('data-indice', 0);
        carrossel_image.src = './assets/images/carrossel0.png';
    } else {
        carrossel_image.setAttribute('data-indice', parseInt(indice_imagem) + 1);
        carrossel_image.src = './assets/images/carrossel' + (parseInt(indice_imagem) + 1) + '.png';
    }
}

setInterval(trocaImagemCarrossel, 3000);