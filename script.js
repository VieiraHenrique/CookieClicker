const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const pricex2 = document.getElementById('pricex2');
const x2 = document.getElementById('x2');
const pricex5 = document.getElementById('pricex5');
const x5 = document.getElementById('x5');
const auto = document.getElementById('auto');
const bonusbutton = document.getElementById('bonus');
const bonustimer = document.getElementById('bonustimer');
const priceAuto = document.getElementById('price-auto');
const priceBonus = document.getElementById('price-bonus');
const perclick = document.getElementById('perclick');
const sound = document.getElementById('audio');

/* on a ete recherche toutes les constantes qu on avait besoin */

let score = 0;
let step = 1;
let pricex2value = 50;
let pricex5value = 150;
let priceAutoValue = 500;
let priceBonusValue = 700;

/* definition des variable ceci definisse le score, le cookie par click, le prix pour le bonus x2, bonus x5, auto click, et le bonus. */

cookie.addEventListener('click', () =>{
    score += step;
    display();
})

/* defini que le score dont augmenter a chaque fois qu un click est effectuer */

function display (){
    scoreDisplay.innerHTML = score;
    pricex2.innerHTML = pricex2value;
    pricex5.innerHTML = pricex5value;
    priceAuto.innerHTML = priceAutoValue;
    priceBonus.innerHTML = priceBonusValue;
    perclick.innerHTML = step;
}

x2.addEventListener('click', () =>{
    if (score > pricex2value){
        step += 2;
        score -= pricex2value;
        pricex2value += 20
    } 
    display();
})

x5.addEventListener('click', () =>{
    if (score > pricex5value){
        step += 5;
        score -= pricex5value;
        pricex5value += 50
    }
    display(); 
})

auto.addEventListener('click', () =>{
    if (score > priceAutoValue){
        score -= priceAutoValue;
        priceAutoValue += 50;
        autoclick();
    }
    
    display()
})

bonusbutton.addEventListener('click', () =>{
    if (score > priceBonusValue){
        score -= priceBonusValue;
        priceBonusValue += 100;
        bonus();
    }
    display();
})

function autoclick(){
    setInterval(function(){
        score++;
        display();
    },1000)
    
}

display();


function bonus() {
    sound.pause();
    sound.currentTime = 0;
    sound.onloadeddata = sound.play()
    bonusbutton.setAttribute('disabled', true)
    step = step*2;
    let timer = 30;
    let timer1 = setInterval(function(){
        bonustimer.innerHTML = timer;
        timer--;
        bonusbutton.style.background = 'rgb(202, 8, 8)';
    },1000)
   setTimeout(function bonusON() {
    clearTimeout(timer1);
    bonusbutton.removeAttribute('disabled')
    bonustimer.innerHTML = "";
    bonusbutton.style.background = '#3da1d8';
    step = step / 2; 
  }, 31000);
  
    
}