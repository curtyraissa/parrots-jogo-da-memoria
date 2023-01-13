//inicialização de variável
let qtd_cartas = 0;
const baralho = [];
let papagaio = ["1", "2", "3", "4", "5", "6", "7"];

//aleatório
function comparador() {
    return Math.random() - 0.5;
}

//perguntar e validar quantidade de cartas
function perguntar() {
    while (!(qtd_cartas % 2 == 0 && qtd_cartas >= 4 && qtd_cartas <= 14)) {
        qtd_cartas = prompt("Com quantas cartas deseja jogar?");
    }
    //chamar função para começar o jogo
    comecar();
}

//função para começar o jogo e distribuir as cartas
function comecar() {
    for (let i = 0; i < (qtd_cartas / 2); i++) {
        let carta = papagaio[i];
        baralho.push(carta)
        baralho.push(carta)
    }
    baralho.sort(comparador);
    //chamar função para mostrar as cartas
    mostrar();
}

//função para mostrar as cartas e iniciar o jogo
function mostrar() {
    let decks = document.querySelector(".decks");
    for (let i = 0; i < baralho.length; i++) {
        let cartinha = `
        <li class="card virar-carta">
            <div class="front-face face">
                <img src="./assets/img/back.png">
            </div>

            <div class="back-face face">
                <img src="./assets/img/${baralho[i]}.gif">
            </div>
        </li> 
        `;
        decks.innerHTML += cartinha;
    }
}



perguntar();