let container = document.getElementById('container');

function drawNumberBox(block) {
    for (let i = 0; i < 9; i++) {
        let numDiv = document.createElement('div');
        numDiv.classList.add('number');
        block.insertAdjacentElement('beforeend', numDiv);
    }
}

function drawBlockOfNumber() {
    let block = document.createElement('div');
    block.classList.add('block');
    drawNumberBox(block);
    container.insertAdjacentElement('beforeend', block);

}

for (let i = 0; i < 9; i++) {
    drawBlockOfNumber();
}

function generateNumber() {
    let arrResult = [];
    for (let i = 0; i < 9; i++) {
        let block = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        arrResult.push(block);
    }
    for (let i = 0; i < 9; i++) {
        let numArr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        // console.log(numArr);
        for (let j = 0; j < 9; j++) {
            if (arrResult[i][j] == 0) {
                let x = 0;
                while (!checkLogic(i, j, arrResult)) {
                    arrResult[i][j] = numArr[x];
                    x++;
                }
            }
        }
    }

    return arrResult;
}

console.log(generateNumber());

let blockList = Array.from(document.querySelectorAll('.block'));
blockList.forEach(block => {
    let numList = Array.from(block.querySelectorAll('.number'));
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numArr = shuffle(numArr);
    numList.forEach(num => {
        num.innerText = numArr.pop();
    })

});

function shuffle(arr) {
    // let arr = [1,2,3,4,5,6,7,8,9]
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

function checkLogic(i, j, numArr) {
    if (isExists(numArr[i][j], numArr[i])) {
        return false;
    }
    let row = Math.floor(j/3);
    let column = j%3;
    for (let index = 0; index < 3; index++) {
        if (numArr[i][j] == 0) {
        
        }
    }
    
    return true;
}

function isExists(num, arr) {
    arr.forEach(a => {
        if (num == a) {
            return true;
        }
    });
    return false;
}