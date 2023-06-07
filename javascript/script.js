let carts = []
let sum = 0
let hasBlakejake = false
let isAlive = true
let massage = ""
let massageEl = document.querySelector(".massage-el")
let cartsEl = document.querySelector(".carts-el")
let sumEl = document.querySelector(".sum-el")
let playerEl = document.querySelector(".player-el")
let player = {
    name: "Hossein",
    chipse: 145
}

playerEl.textContent = player.name + ": $" + player.chipse

function getRandomCart() {
    let randomNumber = Math.floor(Math.random() * 12) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


const startGame = () => {
    renderGame()
}

const renderGame = () => {
    cartsEl.textContent = "Your Carts: "
    for (let i = 0; i < carts.length; i++) {
        cartsEl.textContent += carts[i] + " , "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        massage = "do you want to draw a new cart ?"
    } else if (sum === 21) {
        massage = "you've got a Blackjack"
        hasBlakejake = true
    } else {
        massage = "you are out of the game"
        isAlive = false
    }
    massageEl.textContent = massage
}

const newCart = () => {
    if (isAlive && !hasBlakejake) {
        let cart = getRandomCart()
        sum += cart
        carts.push(cart)
        renderGame()
    }

}
