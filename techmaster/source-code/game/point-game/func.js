// declare canvas
const canvas = document.getElementById('canvas');
canvas.width = innerWidth * 0.8;
canvas.height = innerHeight * 0.8;
canvas.style.border = '1px solid';
// canvas.style.margin = 'auto';
canvas.style.background = 'black';
const ctx = canvas.getContext('2d');

// declare button and div
const btn_play = document.getElementById('btn-play');
const btn_exit = document.getElementById('btn-exit');
const play = document.getElementById('play')
const menu_item = document.getElementById('menu-items');
const end_game = document.getElementById('win-game');
const input_field = document.getElementById('input_field');

// Declare default var
const bossName = document.getElementById('name');
const num_balls = document.getElementById('number');

// tao boss
// let bossRadius = 50;
// let boss = new Ball(bossRadius, bossRadius, bossRadius, 'yellow');

// creat balls and boss
let balls = [];
let bossRadius = 50;
let boss;
let step = 5;
// declare name and number of balls


// menu button event 
btn_play.addEventListener('click', function startGame() {
    // menu_item.style.display = 'none';
    end_game.style.display = 'none';
    input_field.style.display = 'none';
    play.style.display = 'block';
    play.style.display = 'flex';
    play.style.justifyContent = 'center';
    resetGame();
    if (Number.isNaN(num_balls.value) || num_balls.value == 0) {
        createGame(5);
    } else {
        createGame(num_balls.value);
    }
    boss.setName(bossName.value);
    countTime(boss);
    animate();

})

btn_exit.addEventListener('click', function () {
    play.style.display = 'none';
    input_field.style.display = 'flex';
    end_game.style.display = 'none';
    endGame();
})

class Ball {
    constructor(x, y, radius, color, name, startAngle = 0, endAngle = Math.PI * 2) {
        this.x = x; this.y = y; this.radius = radius;
        this.color = color; this.startAngle = startAngle; this.endAngle = endAngle;
        this.point = 0; this.dx = 0; this.dy = 0; this.name = name; this.time = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
        );
        ctx.fill();
        ctx.closePath();
    }
    drawBossName() {
        ctx.fillStyle = 'red';
        ctx.font = '30pt Arial';
        ctx.fillText(this.name, this.x - this.name.length / 2 * 18, this.y + 15)
    }
    drawPoints() {
        ctx.fillStyle = 'blue';
        ctx.font = '30pt Arial';
        ctx.fillText(this.point, 50, canvas.height - 50)
    }
    drawTime() {
        ctx.fillStyle = 'white';
        ctx.font = '30pt Arial';
        ctx.fillText(`time: ${this.time}`, canvas.width - 200, canvas.height - 50)
    }
    move() {
        if (this.x > canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height - this.radius) {
            this.dy = -this.dy;
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

    contact(ball) {
        let dist = Math.sqrt(Math.pow((this.x - ball.x), 2) + Math.pow((this.y - ball.y), 2));
        if (dist < this.radius + ball.radius) {
            // eat
            this.point++;
            if (this.point % 5 === 0) {
                this.radius += 5;
            }
            return true;
        }
        return false;
    }

    checkGrow() {
        if (this.x < this.radius) {
            this.x = this.radius
        }
        if (this.y < this.radius) {
            this.y = this.radius
        }
        if (this.x > canvas.width - this.radius) {
            this.x = canvas.width - this.radius
        }
        if (this.y > canvas.height - this.radius) {
            this.y = canvas.height - this.radius
        }
    }

    setName(name) {
        if (name.length == 0) {
            this.name = 'Fly'
        } else {
            this.name = name;
        }
    }
}

function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

// create list balls
function generateBall(N) {
    for (let i = 0; i < N; i++) {
        let radius = 20;
        let x = randomNumber(0 + radius, canvas.width - radius);
        let y = randomNumber(0 + radius, canvas.height - radius);
        let color = 'red';
        let ball = new Ball(x, y, radius, color);
        balls.push(ball);
    }
}

// draw list ball
function drawBall(balls) {
    balls.forEach(element => {
        element.draw();
    });
}

// change direction of ball
document.addEventListener("keydown", function (e) {

    switch (e.keyCode) {
        case 32:
            boss.dy = 0;
            boss.dx = 0;
            break;
        case 37:
            boss.dx = -step;
            boss.dy = 0;
            break;
        case 38:
            boss.dy = -step;
            boss.dx = 0;
            break;
        case 39:
            boss.dx = step;
            boss.dy = 0;
            break;
        case 40:
            boss.dy = step;
            boss.dx = 0;
            break;
        default:
            break;
    }
});

// check when boss eat ball
function eatBall(boss, balls) {
    balls.forEach((ele, index) => {
        if (boss.contact(ele)) {
            new Audio('http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Mouse%20Click%20Fast.wav-23232-Free-Loops.com.mp3').play();
            balls.splice(index, 1);
            boss.checkGrow();
            if (balls.length == 0) {
                winGame();
            }
        }

    });
}


function createGame(N) {
    // creat balls
    boss = new Ball(bossRadius, bossRadius, bossRadius, 'yellow', bossName.value);
    generateBall(N);
}

function resetGame() {
    balls = [];
    // boss = new Ball(bossRadius, bossRadius, bossRadius, 'yellow');
}

// win game
function winGame() {
    end_game.style.display = 'flex';
    endGame();
}

function endGame() {
    input_field.style.display = 'flex';
    menu_item.style.display = 'flex';
    play.style.display = 'none';
    clearInterval(countTime);
}



function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
}

function update() {
    drawBall(balls);
    boss.draw();
    boss.drawPoints();
    boss.move();
    boss.drawBossName();
    boss.drawTime();
    eatBall(boss, balls);
}

function countTime(boss) {
    setInterval(function () {
        boss.time++;
    }, 1000)
}

