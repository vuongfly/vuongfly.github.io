const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '1px solid';
canvas.style.backgroundColor = '#333'



ctx.translate(canvas.width / 2, canvas.height / 2);

function drawFace(radius) {
    ctx.beginPath();
    let grad;
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, 'blue');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, 'red');
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();

    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();
}

function drawNumber(radius) {
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    let angle;
    let num;
    for (let num = 1; num < 13; num++) {
        angle = num * Math.PI * 2 / 12;
        ctx.rotate(angle);
        ctx.translate(0, - radius * 0.8);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius * 0.8);
        ctx.rotate(-angle);
    }
}

function drawTime(radius) {
    let time = new Date();
    let house = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let angleHouse = Math.PI / 6;
    let angleMinute = Math.PI / 30;
    let angleSecond = Math.PI / 30

    house %= 12;
    house = house * angleHouse + minute * angleHouse / 60 + second * angleHouse / (60 * 60);
    drawHand(house, radius * 0.5, radius * 0.07)
    minute = minute * angleMinute + second * angleSecond / 60;
    drawHand(minute, radius * 0.65, radius * 0.05)
    second = second * angleSecond;
    drawHand(second, radius * 0.8, radius * 0.03)

}

function drawHand(position, length, width) {
    ctx.beginPath();
    ctx.rotate(position);
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.strokeStyle = '#333';
    ctx.stroke();
    ctx.rotate(-position);
}




let radius = 200;
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawFace(radius);
    drawNumber(radius);
    drawTime(radius);
}

animate();