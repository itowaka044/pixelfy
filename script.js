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

// play/pause header

    let playHeader = document.getElementById('play_header');

    //ao clicar no botão, chama função
    
    playHeader.addEventListener('click', clicarBotao);

    //array com indice 0 para o play e 1 para o pause

    arrayPlay = ["> Play", "|| Pause"];

    let j = 0;

    //função clicar botão

    function clicarBotao(){

        //mostra na tela o texto conforme o indice da variavel arrayPlay

        playHeader = document.getElementById('play_header').innerHTML = arrayPlay[j];

        //adiciona mais um ao indice

        j++;

        //condiçoes, se 0 == play, se 1 == pause, se 2 == fim do array e retorna ao inicio com j = 0;

        if(j == 0){
            tocarMusica();
        }

        if(j == 1){
            pausarMusica();
        }

        if (j == 2){
            j = 0;
        }
    }
