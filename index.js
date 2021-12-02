let isAlive = false
let hasBlackJack = false

let sum = 0
let cards = []

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let message = ""
let messageEl = document.getElementById("message-el")

let player = {
    name: "Muhannad",
    chips: 140
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    else{
        return randomCard
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! Better luck next time kiddo."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}