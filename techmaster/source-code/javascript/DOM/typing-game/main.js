let LVL = ['EASY', 'MEDIUM', 'HARD'];
let bonusTime = 0;
let time = 60;
let point = 0;
let words = [];
let word;

let levelSelector = document.getElementById('level');
let timeSelector = document.getElementById('time');
let pointSelector = document.getElementById('point');
let wordSelector = document.getElementById('word');
let level = levelSelector.value;
console.log(level);

levelSelector.addEventListener('change', function (e) {
    level = levelSelector.value;
    console.log(level);
})

function start(level) {

}

function stop() {

}

function reStart() {
    bonusTime = 0;
    time = 60;
    point = 0;
}

