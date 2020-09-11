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
let firstWidth = 40;

function drawNumRect(num) {
    for (let i = num; i > 0; i--) {
        let width = i* firstWidth;
        let rect = new Rectangle();
    }
}