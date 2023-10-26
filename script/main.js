const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

//Usei neste caso uma função anonima, mas podemos usaras arrows Function
focoBt.addEventListener('click', function() {
    html.setAttribute('data-contexto', 'foco');
});

curtoBt.addEventListener('click', function() {
    html.setAttribute('data-contexto', 'descanso-curto');
});

//Neste ultimo caso eu utilzei a Arrow Function
longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
});
