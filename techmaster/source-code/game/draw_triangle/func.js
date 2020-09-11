// Declare canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth * 0.8;
canvas.height = innerHeight * 0.8;
canvas.style.border = '1px solid';

function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

class Point {
    constructor(x, y) {
        this.x = x; this.y = y;
    }
}

function createPoint(width, height) {
    return new Point(randomNumber(0, width), randomNumber(0, height));
}

let A = createPoint(canvas.width, canvas.height);
let B = createPoint(canvas.width, canvas.height);
let C = createPoint(canvas.width, canvas.height);

function drawTriangle(A, B, C) {
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.lineTo(A.x, A.y);
    ctx.stroke();
    ctx.closePath();
}

function drawMedianLine(A, B, C) {
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo((B.x + C.x) / 2, (B.y + C.y) / 2);
    ctx.strokeStyle = 'blue';
    ctx.setLineDash([5, 10]);
    ctx.stroke();
    ctx.closePath();
}

drawTriangle(A, B, C)
drawMedianLine(A, B, C)
drawMedianLine(B, A, C)
drawMedianLine(C, A, B)