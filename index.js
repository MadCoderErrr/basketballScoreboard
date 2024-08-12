// javascript

console.log("Hello world");

let countScore = document.getElementById("homeScore")
let countAnotherScore = document.getElementById("guestScore")
let homescore = 0
let guestscore = 0
console.log(countScore)

function increment11() {
    homescore += 1
    countScore.textContent = homescore
}

function increment21() {
    homescore += 2
    countScore.textContent = homescore
}

function increment31() {
    homescore += 3
    countScore.textContent = homescore
}

function increment12() {
    guestscore += 1
    countAnotherScore.textContent = guestscore
}

function increment22() {
    guestscore += 2
    countAnotherScore.textContent = guestscore
}

function increment32() {
    guestscore += 3
    countAnotherScore.textContent = guestscore
}

function resetJs() {
    guestscore = 0
    homescore = 0
    countAnotherScore.textContent = guestscore
    countScore.textContent = homescore
}