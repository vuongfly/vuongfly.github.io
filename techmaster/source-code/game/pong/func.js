const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;
canvas.style.border = '1px solid';
canvas.style.backgroundColor = 'black';

class Circle {
    constructor(x, y, radius, color, startAngle = 0, endAngle = Math.PI * 2) {
        this.x = x; this.y = y; this.radius = radius;
        this.color = color; this.startAngle = startAngle; this.endAngle = endAngle;
        this.point = 0; this.dx = 0; this.dy = 0; this.step = 10;
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

    checkCollided(rect) {
        // check collided between this circle and the rectangle
        let left = rect.x;
        let right = rect.x + rect.width;
        let top = rect.y;
        let bottom = rect.y + rect.height;
        let space = this.y - (top + bottom) / 2;
        let maxDegChange = this.step / 2;

        // check collided in 4 corners
        if (distance_to_point(left, top, this.x, this.y) <= this.radius ||
            distance_to_point(left, bottom, this.x, this.y) <= this.radius ||
            distance_to_point(right, top, this.x, this.y) <= this.radius ||
            distance_to_point(right, bottom, this.x, this.y) <= this.radius) {
            this.dx = -this.dx;
            this.dy = -this.dy;
            console.log('va cham o goc');
            return true;
        } else {
            // check collided in 4 edge
            if (this.x >= left && this.x <= right) {
                if ((bottom + this.radius) > this.y && this.y > (top - this.radius)) {
                    console.log('va cham chuc ngang');
                    this.dy = - this.dy;
                    return true;
                }
            } else {
                if (this.y >= top && this.y <= bottom) {
                    if ((right + this.radius) > this.x && this.x > (left - this.radius)) {
                        console.log('va cham chuc doc');
                        this.dx = - this.dx;
                        this.dy += space * maxDegChange / rect.height * 2;
                        console.log(this.dy);
                        console.log(this.dx);
                        return true;
                    }
                }
            }
        }
        return false;
    }

}

function distance_to_point(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x; this.y = y; this.width = width; this.height = height; this.color = color;
        this.point = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }
    followBall(ball) {
        let center = this.y + this.height / 2;
        let change = Math.random() * ball.step * 0.7;
        if (ball.y > center) {
            this.y += change;
        } else {
            this.y -= change;
        }
    }
    drawPoint(pointX, pointY) {
        ctx.fillStyle = 'white';
        ctx.font = '30pt Arial';
        ctx.fillText(`${this.point}`, pointX, pointY)
    }

}

// declare default var
let ball = new Circle(canvas.width / 2, canvas.height / 2, 20, 'white');
let userBar = new Rectangle(0, canvas.height / 2, 30, 200, 'white');
let botBar = new Rectangle(canvas.width - 30, canvas.height / 2, 30, 200, 'white');
// ball.x = botBar.x - ball.radius - 100;
// ball.y = botBar.y - ball.radius - 100;
ball.dx = ball.step;
ball.dy = ball.step / 2;

let horizontal = new Rectangle(canvas.width / 2 - 1, 0,
    2, canvas.height, 'white');

canvas.addEventListener("mousemove", function (event) {
    userBar.y = event.clientY - userBar.height / 2;
    // botBar.y = event.clientY - botBar.height / 2;
})

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
}

function update() {
    ball.draw();
    userBar.draw();
    userBar.drawPoint(100, 100)
    botBar.draw();
    botBar.drawPoint(canvas.width - 120, 100)
    ball.move();
    horizontal.draw();
    ball.checkCollided(userBar);
    ball.checkCollided(botBar);
    botBar.followBall(ball);
    fight();
}

function fight() {
    if (ball.x == ball.radius) {
        botBar.point++;
        resetBall(ball);
    }
    if (ball.x == canvas.width - ball.radius) {
        userBar.point++;
        resetBall(ball);
    }
}

function resetBall(ball) {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx *= -1;
    if (Math.round(Math.random())) {
        ball.dy *= -1;
    }
}

animate();