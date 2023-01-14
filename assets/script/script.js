//inicialização de variável
let qtd_cartas = 0;
const baralho = [];
let papagaio = ["1", "2", "3", "4", "5", "6", "7"];
let cardOne, cardTwo;
let moves = 0;
let hits = 0;

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
  let decks = document.querySelector(".decks")
  for (let i = 0; i < baralho.length; i++) {
    let cartinha = `
        <li class="card turned" onclick="desvirar(this)">
            <div class="front-face face">
                <img src="./assets/img/back.png">
            </div>
            <div class="back-face face">
                <img src="./assets/img/${baralho[i]}.gif">
            </div>
        </li> 
        `
    decks.innerHTML += cartinha;
  }
  desvirarTudo();
}

function desvirar(card) {
  if (card.classList.contains("turned")) {
    return
  }
  if (cardOne !== undefined && cardTwo !== undefined) {
    return
  }
  card.classList.add("turned");
  moves++
  if (cardOne === undefined) {
    cardOne = card;
  } else {
    if (cardTwo === undefined) {
      cardTwo = card
      if (cardOne.innerHTML === cardTwo.innerHTML) {
        fixa();
        hits += 2;
        confereSeTerminou();
      } else {
        setTimeout(vira, 1000);
      }
    }
  }
}

function desvirarTudo() {
  const cards = document.querySelectorAll(".turned");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("turned");
  }
}

function fixa() {
  cardOne = undefined;
  cardTwo = undefined;
}

function confereSeTerminou() {
  if (hits === baralho.length) {
    setTimeout(terminar, 1000);
  } else {
    console.log("continua o jogo")
  }
}

function vira() {
  cardOne.classList.remove("turned");
  cardTwo.classList.remove("turned");
  fixa();
}

function terminar() {
  alert(`Você terminou o jogo em ${moves} jogadas!`);
  const recomecar = confirm("Deseja jogar mais uma partida?");
  if (recomecar === true) {
    window.location.reload();
  } else {
    alert("Obrigado por jogar!");
  }
}

perguntar();