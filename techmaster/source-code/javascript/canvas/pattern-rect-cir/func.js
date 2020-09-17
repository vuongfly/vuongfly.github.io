// Declare canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth * 0.8;
canvas.height = innerHeight * 0.8;
canvas.style.border = '1px solid';

class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x; this.y = y; this.width = width; this.height = height; this.color = color;
        // this.dx = 0, this.dy = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }
}

class Circle {
    constructor(x, y, radius, color, startAngle = 0, endAngle = Math.PI * 2) {
        this.x = x; this.y = y; this.radius = radius;
        this.color = color; this.startAngle = startAngle; this.endAngle = endAngle;
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
}

function randomNumber(start, range) {
    return Math.floor(Math.random() * range) + start;
}

function randomRGB() {
    return `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(0, 255)})`;
}

function drawCircleAndRect(num) {
    let firstRadius = 100;
    let radius = Math.ceil((num) / 2) * firstRadius;
    // let center = new Point(canvas.width / 2, canvas.height / 2);
    let color = 'blue';
    ctx.translate(canvas.width / 2, canvas.height / 2);
    for (let i = num; i > 0; i--) {
        if ((i) % 2 == 1) {
            radius = radius / Math.sqrt(2);
            let c = new Circle(0, 0, radius, randomRGB());
            c.draw();
            console.log(radius);
        } else {
            let width = radius / Math.sqrt(2) * 2;
            let rect = new Rectangle(0, 0, width, width, randomRGB());
            ctx.translate(- width / 2, - width / 2);
            rect.draw();
            ctx.translate(width / 2, width / 2);
            console.log('rect' + width);
        }
    }
}

drawCircleAndRect(5);