const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFoco = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFoco.addEventListener('change', function(){
    if(musica.paused){
        musica.play();
    }else {
        musica.pause();
    }
});

function alterarContexto(contexto){
    html.setAttribute('data-contexto' , contexto);
    banner.setAttribute('src',`/imagens/${contexto}.png`);
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    
    switch(contexto){
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

//Usei neste caso uma função anonima, mas podemos usaras arrows Function
focoBt.addEventListener('click', function() {
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', function() {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

//Neste ultimo caso eu utilzei a Arrow Function
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

