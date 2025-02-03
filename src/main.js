const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let noob = new Building('Noob', 0.1, 15);
let elliot = new Building('Elliot', 1, 100);
let guest = new Building('Guest', 5, 300);
let chance = new Building('Chance', 7, 700);
let builderman = new Building('Builderman', 10, 1100);
let shedletsky = new Building('Shedletsky', 30, 2500);
let twotime = new Building('TwoTime', 60, 4100);
let bloxxer = new Building('Bloxxer', 80, 5800);
let bacon = new Building('Bacon', 95, 6100);
let coolkid = new Building('CoolKid', 105, 8000);

let bloxyColaI = new BloxyCola('Bloxy Cola I', 400, noob);
let pizzaI = new Pizza('Pizza I', 600, noob);
let coinFlipI = new CoinFlip('Coin Flip I', 1000, noob);
let ghostBurgerI = new GhostBurger('Ghost Burger I', 2000, noob);
let swordI = new Sword('Sword I', 3600, noob);
let turretI = new Turret('Turret I', 4500, noob);
let cloneI = new Clone('Clone I', 5050, noob);
let slateSkinI = new SlateSkin('Slate Skin I', 6100, noob);


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
    score += bloxxer.cps;
    score += bacon.cps;
    score += coolkid.cps;
}


function updateButtons() {
    noob.buttonState();
    elliot.buttonState();
    guest.buttonState();
    chance.buttonState();
    builderman.buttonState();
    shedletsky.buttonState();
    twotime.buttonState();
    bloxxer.buttonState();
    bacon.buttonState();
    coolkid.buttonState();
    bloxyColaI.buttonState();
    pizzaI.buttonState();
    coinFlipI.buttonState();
    ghostBurgerI.buttonState();
    swordI.buttonState();
    turretI.buttonState();
    cloneI.buttonState();
    slateSkinI.buttonState();
}


function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);