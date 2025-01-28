const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let noob = new Building('Noob', 0.1, 15);
let elliot = new Building('Elliot', 1, 100);
let guest = new Building('Guest', 5, 300);
let chance = new Building('Chance', 7, 700);

let bloxyCola1 = new BloxyCola('Bloxy Cola I', 100, noob);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += noob.cps;
    score += elliot.cps;
    score += guest.cps;
    score += chance.cps;
}

function updateButtons() {
    noob.buttonState();
    elliot.buttonState();
    guest.buttonState();
    chance.buttonState();
    bloxyCola1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);