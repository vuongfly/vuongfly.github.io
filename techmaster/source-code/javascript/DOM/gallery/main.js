let cakes = [
    {
        name: 'Cake 1',
        price: 100000,
        img: './img/cake-1.jpeg',
        type: 'Cake'
    },
    {
        name: 'Cake 2',
        price: 100000,
        img: './img/cake-2.jpeg',
        type: 'Cake'
    },
    {
        name: 'Cake 3',
        price: 100000,
        img: './img/cake-3.jpeg',
        type: 'Cake'
    },
    {
        name: 'Cup Cake 1',
        price: 120000,
        img: './img/cupcake-1.jpeg',
        type: 'CupCake'
    },
    {
        name: 'Cup Cake 2',
        price: 120000,
        img: './img/cupcake-2.jpeg',
        type: 'CupCake'
    },
    {
        name: 'Cup Cake 3',
        price: 120000,
        img: './img/cupcake-3.jpeg',
        type: 'CupCake'
    },
    {
        name: 'Doughnut 1',
        price: 140000,
        img: './img/doughnut-1.jpeg',
        type: 'Doughnut'
    },
    {
        name: 'Doughnut 2',
        price: 140000,
        img: './img/doughnut-2.jpeg',
        type: 'Doughnut'
    },
    {
        name: 'Doughnut 3',
        price: 140000,
        img: './img/doughnut-3.jpeg',
        type: 'Doughnut'
    },
    {
        name: 'Sweets 1',
        price: 150000,
        img: './img/sweets-1.jpeg',
        type: 'Sweet'
    },
    {
        name: 'Sweets 2',
        price: 150000,
        img: './img/sweets-2.jpeg',
        type: 'Sweet'
    },
    {
        name: 'Sweets 3',
        price: 150000,
        img: './img/sweets-3.jpeg',
        type: 'Sweet'
    },
];

let cakeOnPAge = 3;
let cakesList = document.querySelector('.card-list');

function showResult(cakeResult) {
    clearAllCard();
    cakeResult.forEach(ele => {
        addCake(cakesList, ele)
    });
    showPagination(cakeOnPAge, cakeResult, 1);
}


function showAllCard() {
    showResult(cakes);
}

function clearAllCard() {
    let cakesList = document.querySelector('.card-list');
    cakesList.innerHTML = '';
}

function addCake(cakesList, ele) {
    let item =
        `<div class="card-item" type="${ele.type}">
            <div class="card-img">
                <img src="${ele.img}" alt="Cake 1">
            </div>
            <div class="card-info row">
                <div class="card-name">
                    <p>${ele.name}</p>
                </div>
                <div class="card-price">
                    <p>${ele.price}</p>
                </div>
            </div>
        </div>`
    cakesList.insertAdjacentHTML('beforeend', item);
}


function findCardByCategory(category) {
    if (category == 'All') {
        showAllCard();
        return cakes;
    }
    let cakesList = document.querySelector('.card-list');
    let result = cakes.filter(cakes => cakes.type == category);
    return result;
}

let btnCategory = document.querySelectorAll(".category button");
console.log(btnCategory);

btnCategory.forEach(btn => {
    btn.onclick = () => {
        deActive(btnCategory)
        btn.classList.toggle("active");
        let result = findCardByCategory(btn.getAttribute("cate"));
        showResult(result);
    }
})

function deActive(btnCategory) {
    btnCategory.forEach(btn => {
        btn.classList.remove("active");
    })
}

function showPagination(cakeOnPage, cakesList, onPage = 1) {
    let pages = Math.ceil(cakesList.length / cakeOnPage);
    let pagination = document.querySelector('.pagination');
    pagination.innerHTML = "";
    for (let i = 0; i < pages; i++) {
        // creat div for page number
        console.log(i + 1);
        let divPageNum = document.createElement('div');
        divPageNum.classList.add('page-number');
        divPageNum.innerHTML = `${i + 1}`;
        if (i + 1 == onPage) {
            divPageNum.classList.add('active');
        }
        divPageNum.onclick = function () {
            paging(cakeOnPage, cakesList, i + 1);
        };
        pagination.insertAdjacentElement("beforeend", divPageNum);
    }
    return cakesList;
}

function paging(cakeOnPage, cakesList, onPage = 1) {
    // display cake by page number
    console.log('Paging');
    let pages = Math.ceil(cakesList / cakeOnPage);
    let result = cakesList.filter((cake, index) => (index >= (onPage - 1) * cakeOnPage && index < onPage * cakeOnPage));
    console.log(result);
    showResult(result);
    return cakesList;
}



showAllCard();
showPagination(cakeOnPAge, cakes, 1);
