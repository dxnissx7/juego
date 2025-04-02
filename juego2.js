const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🥝', '🍍', '🥥'];
let cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
const gameBoard = document.getElementById('gameBoard');

cards.forEach(symbol => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});

let firstCard, secondCard;
function flipCard() {
    if (this.textContent || secondCard) return;
    this.textContent = this.dataset.symbol;
    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (firstCard.dataset.symbol !== secondCard.dataset.symbol) {
        firstCard.textContent = '';
        secondCard.textContent = '';
    }
    firstCard = secondCard = null;
}
