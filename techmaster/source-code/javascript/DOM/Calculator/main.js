let allBtn = [
    {
        value: '(',
        type: "func"
    },
    {
        value: ')',
        type: "func"
    },
    {
        value: 'DEL',
        type: "func"
    },
    {
        value: 'CLEAR',
        type: "func",
        grow: 2
    },
    {
        value: '7',
        type: "num"
    },
    {
        value: '8',
        type: "num"
    },
    {
        value: '9',
        type: "num"
    },
    {
        value: '/',
        type: "operator",
        text: '%'
    },
    {
        value: '*',
        type: "operator",
        text: '&#8730;'
    }
]

function renderBtn(allBtn) {
    allBtn.forEach(btn => {
        switch (btn.type) {
            case "operator":
                renderOperatorBtn(btn);
                break;
            case "num":
                renderNumberBtn(btn)
                break;
            case "func":
                renderFunctionBtn(btn)
                break;
        }
    });
}

function renderOperatorBtn(btn) {
    // tạo thẻ div
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.setAttribute('btn', btn);
    // add value (btn) to inner text
    if (btn.hasOwnProperty('text')) {
        div.innerText = btn.text;
    } else{
        div.innerText = btn.value;        
    }
    // check grow để thêm class với thuộc tính grid-column
    // check thuộc tính = .hasOwnProperty() để thay đổi giá trị của innerHTML
    if (btn.hasOwnProperty('grow')) {
        //TODO: check start position and insert to html
        div.classList.add('grow-2');
    }
    // add class btn
    div.classList.add('btn')
    // add function onclick
    div.onclick = function () {
        
    }
}

function renderNumberBtn(btn) {

}

function renderFunctionBtn(btn) {

}