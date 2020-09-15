// Declare canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth * 0.8;
canvas.height = innerHeight * 0.9;
canvas.style.border = '1px solid';

let balls = [];

// declare class
class Circle {
    constructor(x, y, radius, color, startAngle = 0, endAngle = Math.PI * 2) {
        this.x = x; this.y = y; this.radius = radius;
        this.color = color; this.startAngle = startAngle; this.endAngle = endAngle;
        this.point = 0; this.dx = 0; this.dy = 0; this.step = 2;
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
    fly() {
        this.y -= this.step;
        this.draw();
        if (this.y <= 0) {
            this.y = this.radius + canvas.height;
            this.x = randomNumber(this.radius, canvas.width - this.radius);
        }
    }
}

// func random
function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

function randomRGB() {
    return `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(0, 255)})`;
}

function generateBall(N) {
    for (let i = 0; i < N; i++) {
        let radius = randomNumber(40, 60);
        let ball = new Circle(randomNumber(radius, canvas.width), randomNumber(radius, canvas.height - radius), radius, randomRGB());
        ball.step = randomNumber(2, 4);
        balls.push(ball);
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    balls.forEach(ball => {
        ball.draw();
        ball.fly();
    });
}

generateBall(10);
animate();