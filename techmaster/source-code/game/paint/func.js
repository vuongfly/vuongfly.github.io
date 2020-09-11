// Declare canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1020;
canvas.height = 600;
canvas.style.border = '1px solid';

// declare default var
let draw = false;
let color = 'black';
let size = 2;
let isEarser = false;
let clear = false;

// declare color buttons
const btn_red = document.getElementById('btn-red');
const btn_blue = document.getElementById('btn-blue');
const btn_green = document.getElementById('btn-green');
const btn_yellow = document.getElementById('btn-yellow');
const btn_black = document.getElementById('btn-black');

// declare colors buttons
const btnColors = document.querySelectorAll('.btn-color');
console.log(btnColors);

// function of color buttons
btnColors.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(btn);
        Array.from(btnColors).map(ele => ele.classList.remove('btn-active'));
        this.classList.add('btn-active');
        let colorValue = btn.getAttribute('color');
        color = colorValue;
        drawStatus();
    })
})

// declare line width buttons
const btnLineWidths = document.querySelectorAll('.btn-line-width')
console.log(btnLineWidths);
// function of line width buttons
btnLineWidths.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(btn);
        Array.from(btnLineWidths).map(ele => ele.classList.remove('btn-active'));
        this.classList.add('btn-active');
        let sizeValue = btn.getAttribute('size');
        size = sizeValue;
        drawStatus();
        // draw = false;
    })
})

// declare control buttons
const btn_clear = document.getElementById('btn-clear');
const btn_reset = document.getElementById('btn-reset');


canvas.addEventListener('mousedown', function (event) {
    if (isEarser) {
        ctx.clearRect(event.offsetX - 5, event.offsetY - 5, 30, 30);
        clearStatus();
        clear = true;
    } else {
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.stroke();
        draw = true;
    }
})

canvas.addEventListener('mousemove', function (event) {
    if (clear) {
        ctx.clearRect(event.offsetX - 5, event.offsetY - 5, 30, 30);
    } else {
        if (draw) {
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        }
    }
})

canvas.addEventListener('mouseup', function (event) {
    if (isEarser) {
        clear = false;
    } else {
        if (draw) {
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        }
    }
    ctx.closePath();
    draw = false;
})


btn_clear.addEventListener('click', function (event) {
    clearStatus();
})

btn_reset.addEventListener('click', function (event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStatus();
    size = 2;
    color = 'black';
})

function clearBorderBtnColor() {
    btn_red.style.border = 'none';
    btn_blue.style.border = 'none';
    btn_green.style.border = 'none';
    btn_yellow.style.border = 'none';
    btn_black.style.border = 'none';
}

function setSize(size) {
    ctx.lineWidth = size;
}

function setColor(color) {
    ctx.strokeStyle = color;
}

function drawStatus() {
    // draw = true;
    isEarser = false;
    clear = false;
}

function clearStatus() {
    draw = false;
    isEarser = true;
    clear = false;
}