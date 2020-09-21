// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Thêm class "table-bordered" cho <table>
let table = document.querySelector('.table tbody')
table.classList.add('table-bordered');

// 2. Thêm class "bg-dark" cho <tr> đầu tiên
let firstTr = document.querySelector('.table tr')
firstTr.classList.add('bg-dark');

// 3. Thêm 1 hàng mới trong table với nội dung như sau : 'Sean Reyes' (@sreyes)
let trNew = document.createElement('tr');
let newItem = ['6', 'Sean', 'Reyes', '@sreyes'];
newItem.forEach((ele, index) => {
    let td = document.createElement('td');
    td.innerHTML = newItem[index];
    trNew.appendChild(td);
});
table.appendChild(trNew);

// 4. Cập nhật "Leona Dixon's handle" thành "@dixonl" (hàng 3 - cột Handle)
let itemChange = (document.querySelector('.table tr:nth-child(4) td:nth-child(4)'));
itemChange.innerText = '@dixonl';

// 5. Di chuyển "Rosa Reed" lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.
let trList = (document.querySelectorAll('.table tr'));
trList[1].insertAdjacentElement('beforebegin', trList[4])
let td1 = Array.from(document.querySelectorAll('.table td:nth-child(1)'));
td1.forEach((ele, index) => {
    ele.innerHTML = index + 1;
});

// 6. Đổi chỗ 2 cột "First" và "Handle" cho nhau
let first = document.querySelectorAll('.table td:nth-child(2)');
let handle = document.querySelectorAll('.table td:nth-child(4)');
first.forEach((ele, index) => {
    [ele.innerHTML, handle[index].innerHTML] = [handle[index].innerHTML, ele.innerHTML]
});
let header = document.querySelectorAll('.table th');
headerArr = Array.from(header);
[headerArr[1].innerHTML, header[3].innerHTML] = [headerArr[3].innerHTML, header[1].innerHTML]

// 7. Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = "#f2f2f2"
let tableInfo = document.querySelectorAll('.table tr')
tableInfo = Array.from(tableInfo);
console.log(tableInfo);
tableInfo.forEach((ele, index) => {
    if (index % 2 == 1) {
        ele.style.background = "#f2f2f2";
    }
})
