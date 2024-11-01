//banner rotativo:

    //pega a classe .banner_imagens
    let imagens = document.querySelector('.banner_imagens');


    //array com as imagens do banner
    let imagensArray = ['assets/akfg_icon.jpg', 'assets/yooge_icon.jpg']

    let i = 0

    function bannerRotativo(){
        
        imagens.setAttribute('src', imagensArray[i]);
        
        i++;

        if(i == 2){
            i = 0;
        }
    }

    //seta o intervalo para 10 seg
    setInterval(bannerRotativo, 10000);

    //pega o query da seta no html
    let setaBannerEsquerda = document.querySelector('#seta_banner_esquerda');
    let setaBannerDireita = document.querySelector('#seta_banner_direita');

    //adiciona o click para a seta
    setaBannerDireita.addEventListener('click', bannerRotativo);
    setaBannerEsquerda.addEventListener('click', bannerRotativo);

//player de músicas

    //pega id #audioPlayer
    const audioPlayer = document.getElementById("audioPlayer");

    //funções tocar e pausar

    function tocarMusica() {
        audioPlayer.play();
    }

    function pausarMusica() {
        audioPlayer.pause();
    }
