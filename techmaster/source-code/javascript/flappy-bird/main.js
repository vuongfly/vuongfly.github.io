// declare var
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let image = new Image();
image.src = './image/all-item.jpg';
// let image = document.getElementById('img');
image.onload = function() {
    drawImage(image);
};

// style canvas
canvas.width = 1343;
canvas.height = 758;
canvas.style.border = '1px solid';

// draw image
function drawImage(img) {
    ctx.drawImage(img,0,0);
    console.log(img);
    console.log(img.naturalWidth);
    console.log(img.naturalHeight);
    console.log(img.width);
    console.log(img.height);
}

// canvas.addEventListener("mousemove", onMouseMove);

canvas.onclick = function(e) {
    console.log(e.offsetX + " " + e.offsetY);
}

let bird, pipeNorth, pipeSouth, fg, bg;

