//Nome = prompt("Qual o nome do jogador?")
const pedra = document.querySelector('#pedra');
const papel = document.querySelector('#papel');
const tesoura = document.querySelector('#tesoura');
var btn = 0;
let control = 0;
const pcPadrao = document.querySelector('#pcPadrao');
const pcPedra = document.querySelector('#pcPedra');
const pcPapel = document.querySelector('#pcPapel');
const pcTesoura = document.querySelector('#pcTesoura');

const rpadrao = document.querySelector("#rpadrao");
const rpedra = document.querySelector("#rpedra");
const rpapel = document.querySelector("#rpapel");
const rtesoura = document.querySelector('#rtesoura')

const pcRingue = document.querySelector(".ringue");

const resposta = document.querySelector("#res");
let num = 0;

const continuar = document.querySelector("#restart");
const reiniciar = document.querySelector('#reiniciar');

const totJogador = document.querySelector("#totJogador")
const totPC = document.querySelector("#totPC")

let cont = 0;
let contPC = 0;
let contJogador = 0;


function placar() {
    totPC.innerHTML = `${contPC}`;
    totJogador.innerHTML = `${contJogador}`;
}


pedra.addEventListener('click', () => {
    btn = 1
    if (control == 0) {
        rpedra.removeAttribute("hidden")
        rpadrao.setAttribute("hidden", "hidden");
        jogar()
        condition()
        imagemPc()
        placar()
    }
    control = 1;
    num = 0;
})

papel.addEventListener('click', () => {
    btn = 2
    if (control == 0) {
        rpapel.removeAttribute("hidden")
        rpadrao.setAttribute("hidden", "hidden");
        jogar()
        condition()
        imagemPc()
        placar()
    }
    control = 1;
    num = 0;
})

tesoura.addEventListener('click', () => {
    btn = 3
    if (control == 0) {
        rtesoura.removeAttribute("hidden")
        rpadrao.setAttribute("hidden", "hidden");
        jogar()
        condition()
        imagemPc()
        placar()
    }
    control = 1;
    num = 0;
})

// let jogar = document.querySelector(".botoes");

// creating a random number
function jogar() {
    while (num < 1) {
        num = Math.round(Math.random() * 3)
    }
    return num;
}

//creating a function to conditionals

function condition() {

    if (jogar() == 1 && btn == 3) {
        cont += 1;
        contPC += 1;
        resposta.innerHTML = "Ponto para o PC"

    } else if (jogar() == 2 && btn == 1) {
        cont += 1;
        contPC += 1;
        resposta.innerHTML = "Ponto para o PC"

    } else if (jogar() == 3 && btn == 2) {
        cont += 1;
        contPC += 1;
        resposta.innerHTML = "Ponto para o PC"

    } else {
        cont += 1;
        contJogador += 1;
        resposta.innerHTML = "Ponto para o Jogador"
    }

    if (jogar() == btn) {
        cont += 1;
        contJogador -= 1;
        resposta.innerHTML = "Empate"
    }

    if (contJogador == 5) {
        resposta.innerHTML = "Você Venceu!"
    }
    if (contPC == 5) {
        resposta.innerHTML = "O Computador Venceu!"
    }
}

//Alterando imagem do jogador PC

function imagemPc() {
    if (jogar() == 1) {
        pcPadrao.setAttribute("hidden", "hidden")
        pcPedra.removeAttribute("hidden")
    } else if (jogar() == 2) {
        pcPadrao.setAttribute("hidden", "hidden")
        pcPapel.removeAttribute("hidden")
    } else {
        pcPadrao.setAttribute("hidden", "hidden")
        pcTesoura.removeAttribute("hidden")
    }

}


continuar.addEventListener("click", () => {
    rpadrao.removeAttribute("hidden");
    rpedra.setAttribute("hidden", "hidden");
    rpapel.setAttribute("hidden", "hidden");
    rtesoura.setAttribute("hidden", "hidden");

    pcPadrao.removeAttribute("hidden")
    pcPedra.setAttribute("hidden", "hidden");
    pcPapel.setAttribute("hidden", "hidden");
    pcTesoura.setAttribute("hidden", "hidden");

    resposta.innerHTML = "";
    btn = 0;
    control = 0;
    if(contJogador > 4 || contPC > 4){
        alert("Clique em Reiniciar")
    }
})

reiniciar.addEventListener('click', () => {
    cont = 0;
    contJogador = 0;
    contPC = 0;
    totPC.innerHTML = `${contPC}`;
    totJogador.innerHTML = `${contJogador}`;
})


