let cartas = [
    {
        valor: 1,
        numeroDaCarta: 1,
        naipe: 'paus',
        nomeDaCarta: '4'
    },
    {
        valor: 2,
        numeroDaCarta: 2,
        naipe: 'copas',
        nomeDaCarta: '7'
    },
    {
        valor: 3,
        numeroDaCarta: 3,
        naipe: 'espadas',
        nomeDaCarta: 'Ás'
    },
    {
        valor: 4,
        numeroDaCarta: 4,
        naipe: 'ouros',
        nomeDaCarta: '7'
    },
    {
        valor: 5,
        numeroDaCarta: 5,
        naipe: 'paus',
        nomeDaCarta: '3'
    },
    {
        valor: 5,
        numeroDaCarta: 6,
        naipe: 'copas',
        nomeDaCarta: '3'
    },
    {
        valor: 5,
        numeroDaCarta: 7,
        naipe: 'espadas',
        nomeDaCarta: '3'
    },
    {
        valor: 5,
        numeroDaCarta: 8,
        naipe: 'ouros',
        nomeDaCarta: '3'
    },
    {
        valor: 6,
        numeroDaCarta: 9,
        naipe: 'paus',
        nomeDaCarta: '2'
    },
    {
        valor: 6,
        numeroDaCarta: 10,
        naipe: 'copas',
        nomeDaCarta: '2'
    },
    {
        valor: 6,
        numeroDaCarta: 11,
        naipe: 'espadas',
        nomeDaCarta: '2'
    },
    {
        valor: 6,
        numeroDaCarta: 12,
        naipe: 'ouros',
        nomeDaCarta: '2'
    },
    {
        valor: 7,
        numeroDaCarta: 13,
        naipe: 'paus',
        nomeDaCarta: 'Ás'
    },
    {
        valor: 7,
        numeroDaCarta: 14,
        naipe: 'copas',
        nomeDaCarta: 'Ás'
    },
    {
        valor: 7,
        numeroDaCarta: 15,
        naipe: 'ouros',
        nomeDaCarta: 'Ás'
    },
    {
        valor: 8,
        numeroDaCarta: 16,
        naipe: 'paus',
        nomeDaCarta: 'Rei'
    },
    {
        valor: 8,
        numeroDaCarta: 17,
        naipe: 'copas',
        nomeDaCarta: 'Rei'
    },
    {
        valor: 8,
        numeroDaCarta: 18,
        naipe: 'espadas',
        nomeDaCarta: 'Rei'
    },
    {
        valor: 8,
        numeroDaCarta: 19,
        naipe: 'ouros',
        nomeDaCarta: 'Rei'
    },
    {
        valor: 9,
        numeroDaCarta: 20,
        naipe: 'paus',
        nomeDaCarta: 'Valete'
    },
    {
        valor: 9,
        numeroDaCarta: 21,
        naipe: 'copas',
        nomeDaCarta: 'Valete'
    },
    {
        valor: 9,
        numeroDaCarta: 22,
        naipe: 'espadas',
        nomeDaCarta: 'Valete'
    },
    {
        valor: 9,
        numeroDaCarta: 23,
        naipe: 'ouros',
        nomeDaCarta: 'Valete'
    },
    {
        valor: 10,
        numeroDaCarta: 24,
        naipe: 'paus',
        nomeDaCarta: 'Rainha'
    },
    {
        valor: 10,
        numeroDaCarta: 25,
        naipe: 'copas',
        nomeDaCarta: 'Rainha'
    },
    {
        valor: 10,
        numeroDaCarta: 26,
        naipe: 'espadas',
        nomeDaCarta: 'Rainha'
    },
    {
        valor: 10,
        numeroDaCarta: 27,
        naipe: 'ouros',
        nomeDaCarta: 'Rainha'
    },
    {
        valor: 11,
        numeroDaCarta: 28,
        naipe: 'paus',
        nomeDaCarta: '7'
    },
    {
        valor: 11,
        numeroDaCarta: 29,
        naipe: 'espadas',
        nomeDaCarta: '7'
    },
    {
        valor: 12,
        numeroDaCarta: 30,
        naipe: 'paus',
        nomeDaCarta: '6'
    },
    {
        valor: 12,
        numeroDaCarta: 31,
        naipe: 'copas',
        nomeDaCarta: '6'
    },
    {
        valor: 12,
        numeroDaCarta: 32,
        naipe: 'espadas',
        nomeDaCarta: '6'
    },
    {
        valor: 12,
        numeroDaCarta: 33,
        naipe: 'ouros',
        nomeDaCarta: '6'
    },
    {
        valor: 13,
        numeroDaCarta: 34,
        naipe: 'paus',
        nomeDaCarta: '5'
    },
    {
        valor: 13,
        numeroDaCarta: 35,
        naipe: 'copas',
        nomeDaCarta: '5'
    },
    {
        valor: 13,
        numeroDaCarta: 36,
        naipe: 'espadas',
        nomeDaCarta: '5'
    },
    {
        valor: 13,
        numeroDaCarta: 37,
        naipe: 'ouros',
        nomeDaCarta: '5'
    },
    {
        valor: 14,
        numeroDaCarta: 38,
        naipe: 'copas',
        nomeDaCarta: '4'
    },
    {
        valor: 14,
        numeroDaCarta: 39,
        naipe: 'espadas',
        nomeDaCarta: '4'
    },
    {
        valor: 14,
        numeroDaCarta: 40,
        naipe: 'ouros',
        nomeDaCarta: '4'
    }
]

let baralho = [...cartas]

function puxarCartaAleatoria() {
    if (baralho.length === 0) return null;
    let indiceAleatorio = Math.floor(Math.random() * baralho.length);
    return baralho.splice(indiceAleatorio, 1)[0]; 
}

let maoDoJogador = document.querySelector('#mao-do-jogador');
let maoDoAdversario1 = document.querySelector('#mao-do-adversario-1');
let maoDoAdversario2 = document.querySelector('#mao-do-adversario-2');
let maoDoAdversario3 = document.querySelector('#mao-do-adversario-3');
let botaoDe1v1 = document.querySelector('#jogo-1v1');
let botaoDe1v3 = document.querySelector('#jogo-1v3');
let placar = document.querySelector('.placar');
let corpoDaPagina = document.querySelector("body");
let todosOsBotoesDeJogar = document.querySelectorAll(".botao-de-jogar");
const rect = corpoDaPagina.getBoundingClientRect();
const meioDoBodyX = rect.left + rect.width/2;
const meioDoBodyY = rect.top + rect.height/2;

document.addEventListener('DOMContentLoaded', function() {
    corpoDaPagina.classList.add("antes-de-decidir");
})

botaoDe1v1.addEventListener('click', function() {
    placar.style.display = "flex";
    botaoTruco.style.display = "block";
    corpoDaPagina.classList.remove("antes-de-decidir")
    todosOsBotoesDeJogar.forEach(botao => {
        botao.classList.add("ja-escolheu");
    })
    
    for(let i = 0; i < 3; i++) {
        let carta = document.createElement('div');
        let cartasorteada = puxarCartaAleatoria();
        carta.classList.add('carta');
        maoDoJogador.appendChild(carta);
        carta.dataset.valor = cartasorteada.valor;
        qualCartaÉ(carta ,cartasorteada.numeroDaCarta);
        carta.addEventListener('click', function() {
            const anguloMinimo = -25;
            const anguloMaximo = 25;
            const anguloAleatorio = Math.floor(Math.random() * (anguloMaximo - anguloMinimo + 1)) + anguloMinimo;
            if(carta.classList.contains('no-centro')){
                carta.classList.remove('no-centro');
                carta.classList.add('carta-jogada');
                qualCartaÉ(carta ,carta.dataset.numeroDaCarta);
                carta.style.transform = `translate(-50%, -50%) rotate(${anguloAleatorio}deg)`;
                jogarCartaDoAdversario1v1();
            }
        });
        setTimeout(() => {
            carta.classList.add('no-centro');
        }, 1000 * (i + 1));
    }

    for(let i = 0; i < 3; i++) {
        let carta = document.createElement('div');
        let cartasorteada = puxarCartaAleatoria();
        carta.classList.add('carta');
        carta.style.backgroundImage = "url('imgs/carta-de-costas.png')";
        carta.style.backgroundSize = "cover";
        carta.style.backgroundPosition = "center";
        carta.dataset.valor = cartasorteada.valor;
        carta.dataset.numeroDaCarta = cartasorteada.numeroDaCarta;
        maoDoAdversario1.appendChild(carta);
        setTimeout(() => {
            carta.classList.add('no-centro');
        }, 1200 * (i + 1));
    }
});

botaoDe1v3.addEventListener('click', function(){
    botaoTruco.style.display = "block";
    placar.style.display = "flex";
    corpoDaPagina.classList.remove("antes-de-decidir")
    todosOsBotoesDeJogar.forEach(botao => {
        botao.classList.add("ja-escolheu");
    })

    for(let i = 0; i < 3; i++) {
        let carta = document.createElement('div');
        let cartasorteada = puxarCartaAleatoria();
        carta.classList.add('carta-2v2');
        maoDoJogador.appendChild(carta);
        carta.dataset.valor = cartasorteada.valor;
        qualCartaÉ(carta ,cartasorteada.numeroDaCarta);
        carta.addEventListener('click', function() {
            const anguloMinimo = -25;
            const anguloMaximo = 25;
            const anguloAleatorio = Math.floor(Math.random() * (anguloMaximo - anguloMinimo + 1)) + anguloMinimo;
            if(carta.classList.contains('no-centro')){
                carta.classList.remove('no-centro');
                carta.classList.add('carta-jogada');
                qualCartaÉ(carta ,carta.dataset.numeroDaCarta);
                carta.style.transform = `translate3d(-50%, -50vh, 2px) rotate(${anguloAleatorio}deg)`;
                setTimeout(() => {
                    jogarCartaDoAdversario2();
                    setTimeout(() => {
                        jogarCartaDoAdversario1();
                        setTimeout(() => {
                            jogarCartaDoAdversario3();
                        }, 1000);
                    }, 1000);
                }, 1000 * (i+1))

            }
        });
        setTimeout(() => {
            carta.classList.add('no-centro');
        }, 1200 * (i + 1));
    }

    for(let i = 0; i < 3; i++) {
        let carta = document.createElement('div');
        let cartasorteada = puxarCartaAleatoria();
        carta.classList.add('carta-2v2-adversario-2-L');
        carta.style.backgroundImage = "url('imgs/carta-de-costas.png')";
        carta.style.backgroundSize = "cover";
        carta.style.backgroundPosition = "center";
        carta.dataset.valor = cartasorteada.valor;
        carta.dataset.numeroDaCarta = cartasorteada.numeroDaCarta;
        maoDoAdversario2.appendChild(carta);
        setTimeout(() => {
            carta.classList.add('no-centro');
        }, 1200 * (i + 1));
    }

    for(let i = 0; i < 3; i++) {
        let carta = document.createElement('div');
        let cartasorteada = puxarCartaAleatoria();
        carta.classList.add('carta-2v2');
        carta.style.backgroundImage = "url('imgs/carta-de-costas.png')";
        carta.style.backgroundSize = "cover";
        carta.style.backgroundPosition = "center";
        carta.dataset.valor = cartasorteada.valor;
        carta.dataset.numeroDaCarta = cartasorteada.numeroDaCarta;
        maoDoAdversario1.appendChild(carta);
        setTimeout(() => {
            carta.classList.add('no-centro');
        }, 1200 * (i + 1));
    }

    for(let i = 0; i < 3; i++) {
        let carta = document.createElement('div');
        let cartasorteada = puxarCartaAleatoria();
        carta.classList.add('carta-2v2-adversario-3-L');
        carta.style.backgroundImage = "url('imgs/carta-de-costas.png')";
        carta.style.backgroundSize = "cover";
        carta.style.backgroundPosition = "center";
        carta.dataset.valor = cartasorteada.valor;
        carta.dataset.numeroDaCarta = cartasorteada.numeroDaCarta;
        maoDoAdversario3.appendChild(carta);
        setTimeout(() => {
            carta.classList.add('no-centro');
        }, 1200 * (i + 1));
    }
});

function jogarCartaDoAdversario1v1() {
    let cartasNaMao = maoDoAdversario1.querySelectorAll('.carta.no-centro');
    const anguloMinimo = -25;
    const anguloMaximo = 25;
    const anguloAleatorio = Math.floor(Math.random() * (anguloMaximo - anguloMinimo + 1)) + anguloMinimo;
    if(cartasNaMao.length > 0){
        setTimeout(() => {
            let cartaParaJogar = cartasNaMao[0];
            cartaParaJogar.style.backgroundImage = 'none';
            qualCartaÉ(cartaParaJogar ,+cartaParaJogar.dataset.numeroDaCarta);
            cartaParaJogar.style.transform = `rotate(${anguloAleatorio}deg)`;
            cartaParaJogar.classList.remove('no-centro');
            cartaParaJogar.classList.add('carta-do-adversario-jogada');
        }, 1000);
    }
}

function jogarCartaDoAdversario1() {
    let cartasNaMao = maoDoAdversario1.querySelectorAll('.carta-2v2.no-centro');
    const anguloMinimo = -25;
    const anguloMaximo = 25;
    const anguloAleatorio = Math.floor(Math.random() * (anguloMaximo - anguloMinimo + 1)) + anguloMinimo;
    if(cartasNaMao.length > 0){
        setTimeout(() => {
            let cartaParaJogar = cartasNaMao[0];
            cartaParaJogar.style.backgroundImage = 'none';
            qualCartaÉ(cartaParaJogar ,+cartaParaJogar.dataset.numeroDaCarta);
            cartaParaJogar.style.transform = `translate3d(-50%,calc(50vh - 19vh), 2px) rotate(${anguloAleatorio}deg)`;
            cartaParaJogar.classList.remove('no-centro');
            cartaParaJogar.classList.add('carta-do-adversario-jogada');
        }, 1000);
    }
}
function jogarCartaDoAdversario2() {
    let cartasNaMao = maoDoAdversario2.querySelectorAll('.carta-2v2-adversario-2-L.no-centro');
    const anguloMinimo = -25;
    const anguloMaximo = 25;
    const anguloAleatorio = Math.floor(Math.random() * (anguloMaximo - anguloMinimo + 1)) + anguloMinimo;
    if(cartasNaMao.length > 0){
        setTimeout(() => {
            let cartaParaJogar = cartasNaMao[0];
            cartaParaJogar.style.backgroundImage = 'none';
            qualCartaÉ(cartaParaJogar ,+cartaParaJogar.dataset.numeroDaCarta);
            cartaParaJogar.style.transform = `translate3d(calc(-50vw + 4vw), +50%, 3px) rotate(${anguloAleatorio+90})`;
            cartaParaJogar.classList.remove('no-centro');
            cartaParaJogar.classList.add('carta-do-adversario-jogada');
        }, 1000);
    }
}
function jogarCartaDoAdversario3() {
    let cartasNaMao = maoDoAdversario3.querySelectorAll('.carta-2v2-adversario-3-L.no-centro');
    const anguloMinimo = -25;
    const anguloMaximo = 25;
    const anguloAleatorio = Math.floor(Math.random() * (anguloMaximo - anguloMinimo + 1)) + anguloMinimo;
    if(cartasNaMao.length > 0){
        setTimeout(() => {
            let cartaParaJogar = cartasNaMao[0];
            cartaParaJogar.style.backgroundImage = 'none';
            qualCartaÉ(cartaParaJogar ,+cartaParaJogar.dataset.numeroDaCarta);
            cartaParaJogar.style.transform = `translate3d(calc(-50vw + 4vw), -50%, 4px) rotate(${anguloAleatorio}deg)`;
            cartaParaJogar.classList.remove('no-centro');
            cartaParaJogar.classList.add('carta-do-adversario-jogada');
        }, 1000);
    }
}

function qualCartaÉ(carta ,numeroDaCarta){
    switch (numeroDaCarta) {
        case 1:
            carta.style.backgroundImage = "url('imgs/cards/C4.png')";
            break;
        case 2:
            carta.style.backgroundImage =  "url('imgs/cards/H7.png')";
            break;
        case 3:
            carta.style.backgroundImage =  "url('imgs/cards/SA.png')";
            break;
        case 4:
            carta.style.backgroundImage =  "url('imgs/cards/D7.png')";
            break;
        case 5:
            carta.style.backgroundImage =  "url('imgs/cards/C3.png')";
            break;
        case 6:
            carta.style.backgroundImage =  "url('imgs/cards/H3.png')";
            break;
        case 7:
            carta.style.backgroundImage =  "url('imgs/cards/S3.png')";
            break;
        case 8:
            carta.style.backgroundImage =  "url('imgs/cards/D3.png')";
            break;
        case 9:
            carta.style.backgroundImage =  "url('imgs/cards/C2.png')";
            break;
        case 10:
            carta.style.backgroundImage =  "url('imgs/cards/H2.png')";
            break;
        case 11:
            carta.style.backgroundImage =  "url('imgs/cards/S2.png')";
            break;
        case 12:
            carta.style.backgroundImage =  "url('imgs/cards/D2.png')";
            break;
        case 13:
            carta.style.backgroundImage =  "url('imgs/cards/CA.png')";
            break;
        case 14:
            carta.style.backgroundImage = "url('imgs/cards/HA.png')";
            break;
        case 15:
            carta.style.backgroundImage =  "url('imgs/cards/DA.png')";
            break;
        case 16:
            carta.style.backgroundImage =  "url('imgs/cards/CK.png')";
            break;
        case 17:
            carta.style.backgroundImage =  "url('imgs/cards/HK.png')";
            break;
        case 18:
            carta.style.backgroundImage =  "url('imgs/cards/SK.png')";
            break;
        case 19:
            carta.style.backgroundImage =  "url('imgs/cards/DK.png')";
            break;
        case 20:
            carta.style.backgroundImage =  "url('imgs/cards/CJ.png')";
            break;
        case 21:
            carta.style.backgroundImage =  "url('imgs/cards/HJ.png')";
            break;
        case 22:
            carta.style.backgroundImage =  "url('imgs/cards/SJ.png')";
            break;
        case 23:
            carta.style.backgroundImage =  "url('imgs/cards/DJ.png')";
            break;
        case 24:
            carta.style.backgroundImage =  "url('imgs/cards/CQ.png')";
            break;
        case 25:
            carta.style.backgroundImage =  "url('imgs/cards/HQ.png')";
            break;
        case 26:
            carta.style.backgroundImage =  "url('imgs/cards/SQ.png')";
            break;
        case 27:
            carta.style.backgroundImage =  "url('imgs/cards/DQ.png')";
            break;
        case 28:
            carta.style.backgroundImage =  "url('imgs/cards/C7.png')";
            break;
        case 29:
            carta.style.backgroundImage =  "url('imgs/cards/S7.png')";
            break;
        case 30:
            carta.style.backgroundImage =  "url('imgs/cards/C6.png')";
            break;
        case 31:
            carta.style.backgroundImage =  "url('imgs/cards/H6.png')";
            break;
        case 32:
            carta.style.backgroundImage =  "url('imgs/cards/S6.png')";
            break;
        case 33:
            carta.style.backgroundImage =  "url('imgs/cards/D6.png')";
            break;
        case 34:
            carta.style.backgroundImage =  "url('imgs/cards/C5.png')";
            break;
        case 35:
            carta.style.backgroundImage = "url('imgs/cards/H5.png')";
            break;
        case 36:
            carta.style.backgroundImage =  "url('imgs/cards/S5.png')";
            break;
        case 37:
            carta.style.backgroundImage =  "url('imgs/cards/D5.png')";
            break;
        case 38:
            carta.style.backgroundImage =  "url('imgs/cards/H4.png')";
            break;
        case 39:
            carta.style.backgroundImage =  "url('imgs/cards/S4.png')";
            break;
        case 40:
            carta.style.backgroundImage =  "url('imgs/cards/D4.png')";
            break;
        default:
            break;
    }

    carta.style.backgroundSize = 'cover';
    carta.style.backgroundPosition = 'center';
}

let pontuacao1 = document.querySelector('#Equipe1 span');
let pontuacao2 = document.querySelector('#Equipe2 span');
let valorEl = document.querySelector('#valor-da-mao span');
let valorMao = 2;
let valores = [2, 4, 6, 9, 12];
let indice = 0;
let botaoTruco = document.querySelector('#botao-truco');
botaoTruco.addEventListener("click", function(){
    if(indice < 4)
        indice++;

    valorMao = valores[indice];
    valorEl.innerHTML = valorMao;
});
