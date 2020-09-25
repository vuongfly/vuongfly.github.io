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

function showAllCard() {
    let cakesList = document.querySelector('.card-list');
    cakes.forEach(ele => {
        addCake(cakesList, ele)
    });
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

showAllCard();

function findCardByCategory(category) {
    if (category == 'All') {
        showAllCard();
        return;
    }
    let cakesList = document.querySelector('.card-list');
    clearAllCard();
    let result = cakes.filter(cakes => cakes.type == category);
    result.forEach(ele => {
        addCake(cakesList, ele)
    });

}

let btnCategory = document.querySelectorAll(".category button");
console.log(btnCategory);

btnCategory.forEach(btn => {
    btn.onclick = () => {
        deActive(btnCategory)
        btn.classList.toggle("active");
        findCardByCategory(btn.getAttribute("cate"));
    }
})

function deActive(btnCategory) {
    btnCategory.forEach(btn => {
        btn.classList.remove("active");
    })
}

