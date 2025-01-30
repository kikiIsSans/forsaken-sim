const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let noob = new Building('Noob', 0.1, 15);
let elliot = new Building('Elliot', 1, 100);
let guest = new Building('Guest', 5, 300);
let chance = new Building('Chance', 7, 700);
let builderman = new Building('Builderman', 10, 1100);
let shedletsky = new Building('Shedletsky', 20, 2500);
let twotime = new Building('TwoTime', 47, 5000);

let bloxyColaI = new BloxyCola('Bloxy Cola I', 400, noob);
let pizzaI = new Pizza('Pizza I', 600, noob);
let coinFlipI = new CoinFlip('Coin Flip I', 1000, noob);


function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += noob.cps;
    score += elliot.cps;
    score += guest.cps;
    score += chance.cps;
    score += builderman.cps;
    score += shedletsky.cps;
    score += twotime.cps;
}

function updateButtons() {
    noob.buttonState();
    elliot.buttonState();
    guest.buttonState();
    chance.buttonState();
    builderman.buttonState();
    shedletsky.buttonState();
    twotime.buttonState();
    bloxyColaI.buttonState();
    pizzaI.buttonState();
    coinFlipI.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);