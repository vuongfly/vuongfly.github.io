// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Một tính năng mới  vào gói Pro: '24/7 Phone support'

let proPlanList = document.querySelector('#pro-plan .list-unstyled');
console.log(proPlanList);
function addNewLiItem(list, itemText) {
    let li = document.createElement('li');
    li.innerText = itemText;
    list.appendChild(li);
}

addNewLiItem(proPlanList, "24/7 Phone support");

// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

let proPlan = document.getElementById("pro-plan");
let basicPlan = document.getElementById("basic-plan");

[proPlan.innerHTML, basicPlan.innerHTML] = [basicPlan.innerHTML, proPlan.innerHTML];

// 3. Trong gói Pro hãy cập nhật nút 'Get Started' hiện tại thành màu xanh có màu background: #82DACA, có chữ màu #fff và có dòng chữ 'Buy Now'

proBtnStart = document.querySelector('#basic-plan button')
console.log(proBtnStart);
proBtnStart.style.background = '#82DACA';
proBtnStart.style.color = '#fff';
proBtnStart.innerText = 'Buy Now';



// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%

let storageAmount = document.querySelectorAll('.storage-amount');
let storageArr = Array.from(storageAmount);
console.log(storageArr);
storageArr.map(ele => {ele.innerText = Number(ele.innerText) * 1.25})