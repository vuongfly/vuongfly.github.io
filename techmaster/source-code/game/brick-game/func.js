const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth * 0.8;
canvas.height = innerHeight
canvas.style.border = '1px solid';

// declare var global
let bar;
let bricks = [];
let ball;
let colors = ['blue', 'green', 'cyan', 'purple', 'orange'];
let timeStatus;

// declare class
class Circle {
    constructor(x, y, radius, color, startAngle = 0, endAngle = Math.PI * 2) {
        this.x = x; this.y = y; this.radius = radius;
        this.color = color; this.startAngle = startAngle; this.endAngle = endAngle;
        this.point = 0; this.dx = 0; this.dy = 0; this.step = 2, 5;
        this.time = 0;
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
    drawTime() {
        ctx.fillStyle = 'black';
        ctx.font = '30pt Arial';
        ctx.fillText(`${this.time}`, canvas.width - 150, canvas.height - 50)
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

        // check collided in 4 corners
        if (distance_to_point(left, top, this.x, this.y) < this.radius ||
            distance_to_point(left, bottom, this.x, this.y) < this.radius ||
            distance_to_point(right, top, this.x, this.y) < this.radius ||
            distance_to_point(right, bottom, this.x, this.y) < this.radius) {
            this.dx = -this.dx;
            this.dy = -this.dy;
            console.log('va cham o goc');
            return true;
        } else {
            // check collided in 4 edge
            if (this.x >= left && this.x <= right) {
                if ((bottom + this.radius) >= this.y && this.y >= (top - this.radius)) {
                    console.log('va cham');
                    this.dy = - this.dy;
                    return true;
                }
            } else {
                if (this.y >= top && this.y <= bottom) {
                    if ((right + this.radius) >= this.x && this.x >= (left - this.radius)) {
                        console.log('va cham');
                        this.dx = - this.dx;
                        return true;
                    }
                }
            }
        }


        return false;
    }

    isEnd() {
        if (this.y >= canvas.height - this.radius && this.dx != 0 && this.dy != 0) {
            this.dx = 0;
            this.dy = 0;
            console.log('game end');
            return true;
        }
        return false;
    }

    isWin() {
        if (balls.length == 0) {
            console.log("win");
            // clearInterval(timeStatus);
            return true;
        }
        return false;
    }

    eatBrick(bricks) {
        bricks.forEach((ele, index) => {
            if (this.checkCollided(ele)) {
                console.log('- point brick');
                ele.point--;
                ele.color = colors[ele.point];
                if (ele.point < 0) {
                    console.log('eat brick');
                    bricks.splice(index, 1);
                }
            }
        });
    }


}

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

function distance_to_point(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

// create all object of game
function createObj() {
    time = 0;
    // draw bar
    let bw = 200;
    let bh = 40;
    bar = new Rectangle((canvas.width - bw) / 2, (canvas.height - bh - 40), bw, bh, 'red');
    // draw ball
    let bRadius = 20;
    ball = new Circle(canvas.width / 2, canvas.height * 0.75, bRadius, 'green');
    ball.dx = ball.step;
    ball.dy = - ball.step;
    countTime(ball);
    // draw brick wall
    let bMargin = 5;
    let bWidth = canvas.width / 10 - bMargin * 2;
    let bHeight = 40;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 10; j++) {
            let brick = new Rectangle(bMargin + j * (bWidth + bMargin * 2), bMargin + i * (bHeight + bMargin * 2), bWidth, bHeight, "blue");
            brick.point = 2;
            brick.color = colors[brick.point];
            bricks.push(brick);
        }
    }
}

function generateBricks() {
    bricks.forEach(brick => {
        brick.draw();
    });
}



canvas.addEventListener("mousemove", function (event) {
    bar.x = event.clientX - bar.width / 2;
})

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
}

// draw object
function update() {
    bar.draw();
    ball.draw();
    ball.move();
    ball.drawTime();
    generateBricks();
    if (ball.isEnd()) {
        clearInterval(timeStatus);
    }
    // ball.isWin();
    ball.eatBrick(bricks);
    ball.checkCollided(bar);
}

function countTime(ball) {
    timeStatus = setInterval(function () {
        ball.time++;
    }, 1000)
}

createObj();
animate();
