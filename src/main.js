const tickRate = 1000 / 30;
let score = 0;

let noob = new Building('Noob', 0.1, 15, 'buyNoob');
let elliot = new Building('Elliot', 1, 100, 'buyElliot');
let twoTime = new Building('Two Time', 3, 160, 'buyTwoTime');
let guest = new Building('Guest', 5, 300, 'buyGuest');
let chance = new Building('Chance', 10, 1000, 'buyChance');


function incScore() {
    score += noob.cps;
    score += elliot.cps;
    score += twoTime.cps;
    score += guest.cps;
    score += chance.cps;
}

function scorePlusPlus(){
    score++;
}

function updateButton() {
    noob.buttonState();
    elliot.buttonState();
    twoTime.buttonState();
    guest.buttonState();
    chance.buttonState();

}

function updatePage() {
    incScore();
    updateButton();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
