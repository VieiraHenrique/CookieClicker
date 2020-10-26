const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const pricex2 = document.getElementById('pricex2');
const x2 = document.getElementById('x2');
const pricex5 = document.getElementById('pricex5');
const x5 = document.getElementById('x5');
const auto = document.getElementById('auto');

let score = 0;
let step = 1;
let pricex2value = 10;
let pricex5value = 50;

cookie.addEventListener('click', () =>{
    score += step;
    display();
})

function display (){
    scoreDisplay.innerHTML = score;
    pricex2.innerHTML = pricex2value;
    pricex5.innerHTML = pricex5value;
}

x2.addEventListener('click', () =>{
    if (score > pricex2value){
        step *= 2;
        score -= pricex2value;
        pricex2value += 20
    } 
    display();
})

x5.addEventListener('click', () =>{
    if (score > pricex5value){
        step *= 5;
        score -= pricex5value;
        pricex5value += 50
    }
    display(); 
})

auto.addEventListener('click', () =>{
    autoclick();
})

function autoclick(){
    setInterval(function(){
        score++;
        display();
    },1000)
    
}

display();
