// Declare all variables required
let people = [];
let container = document.querySelector('.wrapper');
let player0Container = document.querySelector('.player-0-panel');
let player1Container = document.querySelector('.player-1-panel');
let dices = [
    {
        id: 1,
        url: './img/dice-1.png',
        point: 1
    },
    {
        id: 2,
        url: './img/dice-2.png',
        point: 2
    },
    {
        id: 3,
        url: './img/dice-3.png',
        point: 3
    },
    {
        id: 4,
        url: './img/dice-4.png',
        point: 4
    },
    {
        id: 5,
        url: './img/dice-5.png',
        point: 5
    },
    {
        id: 6,
        url: './img/dice-6.png',
        point: 6
    },

];

// Class
class Person {
    id;
    name;
    score;
    currentScore;
    isActive;

    constructor(id, name, score = 0) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.currentScore = 0;
        this.isActive = false;
    }
}

class Dice {
    id;
    url;
    point;
}

// Function

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


function createPeople(name) {
    let p = new Person(create_UUID(), name);
    people.push(p);
}

function newGame() {
    people = [];
    createPeople('Player 1');
    createPeople('Player 2');
    people[1].isActive = true;

}

function renderUIByPerson(person) {
    let textHtml = `<div class="player-0-panel ${person.isActive ? 'active' : ''}" id="${person.id}">
                        <div class="player-name" id="name-0">${person.id}</div>
                        <div class="player-score" id="score-0">${person.score}</div>
                        <div class="player-current-box">
                            <div class="player-current-label">Điểm</div>
                            <div class="player-current-score" id="current-0">${person.currentScore}</div>
                        </div>
                    </div>`;
    return textHtml;
}

function renderUI(people) {
    
}

// Run from here
newGame();
console.log(people);



// let peopleHtml = document.querySelectorAll('.player-0-panel, .player-1-panel');
// peopleHtml = Array.from(peopleHtml);


// let player0 = document.querySelectorAll('.player-0-panel div');
// player0 = Array.from(player0);
// console.log(player0);
// console.log(player0[0].innerText);
// console.log(player0[1].innerText);
// console.log(player0[4].innerText);



