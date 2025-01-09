const tickRate = 1000 / 30;
let score = 0;

let survivors = new Building('Survivors', 0.1, 15, 'buySurvivors');

function incScore() {
    score += survivors.cps;
}

function scorePlusPlus(){
    score++;
}

function updatePage() {
    incScore();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
