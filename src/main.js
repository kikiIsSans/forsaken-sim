const tickRate = 1000 / 30;
let score = 0;

let noob = new Building('Noob', 0.1, 15,'buyNoob');
let elliot = new Building('Elliot', 1, 100,'buyElliot');
let twoTime = new Building('Two Time', 3, 160,'buyTwoTime');

function incScore() {
    score += noob.cps;
    score += elliot.cps;
    score += twoTime.cps;
}

function scorePlusPlus(){
    score++;
}

function updateButton() {
    noob.buttonState();
    elliot.buttonState();
    twoTime.buttonState();
}

function updatePage() {
    incScore();
    updateButton();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
