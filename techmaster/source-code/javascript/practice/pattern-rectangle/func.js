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

let rects = [];
let firstWidth = 60;

class Point {
    constructor(x, y) {
        this.x = x; this.y = y;
    }
}

function drawNumRect(num) {
    let center = new Point(canvas.width / 2, canvas.height / 2);
    let color = 'blue';
    ctx.translate(center.x, center.y);
    for (let i = num; i > 0; i--) {
        let width = Math.pow(Math.sqrt(2), i) * firstWidth;
        if (color.localeCompare('blue') == 0) {
            color = 'green';
        } else {
            color = 'blue';
        }
        let rect = new Rectangle(0, 0, width, width, color);
        if ((num - i) % 2 == 1) {
            console.log('blue');
            ctx.translate(0, - width / Math.sqrt(2));
            ctx.rotate(45 * Math.PI / 180)
            rect.draw();
            ctx.rotate(-45 * Math.PI / 180)
            ctx.translate(0, width / Math.sqrt(2));
        } else {
            console.log('green');
            ctx.translate(-width / 2, -width / 2);
            rect.draw();
            ctx.translate(width / 2, width / 2);
        }
    }
}

drawNumRect(6);