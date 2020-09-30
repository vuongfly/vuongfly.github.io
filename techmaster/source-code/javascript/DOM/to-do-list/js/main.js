todoList = [
    {
        id: create_UUID(),
        title: 'Vô địch ngoại hạng Anh',
        status: true,
    },
    {
        id: create_UUID(),
        title: 'Leo rank bạc',
        status: false,
    },
    {
        id: create_UUID(),
        title: 'Bài tập Html lession 3',
        status: true,
    },
    {
        id: create_UUID(),
        title: 'Bài tập Java lession 4',
        status: false,
    },

];

let todo_list = document.querySelector('.todo-list');
let btn_add = document.querySelector('#btn-add');
let todo_option_item = document.querySelectorAll('.todo-option-item input');
let todo_input = document.querySelector('#todo-input');

function renderUI(todoList) {
    // render UI by todoList
    todo_list.innerHTML = '';
    // todoList.length = 0;
    if (0 == todoList.length) {
        let emptyListMess = '<div class="center"> Todo List is empty </div>';
        todo_list.insertAdjacentHTML('beforeend', emptyListMess);
    } else {
        todoList.forEach(item => {
            let todoItem_html = renderItem(item);
            todo_list.insertAdjacentHTML('beforeend', todoItem_html);
        });
    }
}

function renderItem(item) {
    return `<div class="todo-item active-todo row space-between">
                <div class="todo-item-title row">
                    <input type="checkbox" ${item.status ? 'checked' : ''} >
                    <label  class="${item.status ? 'deActive-todo' : ''}"  onclick="toggleStatus('${item.id}')" >${item.title}</label>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="changeToUpdateBtn('${item.id}')">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo('${item.id}')">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>`;
}

function deleteTodo(id) {
    console.log('delete ' + id);
    todoList = todoList.filter(todo => todo.id != id);
    console.log(todoList);
    renderUI(todoList);
}

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function toggleStatus(id) {
    todoList.forEach(item => {
        if (id == item.id) {
            item.status = !item.status;
        }
    })
    renderUI(todoList);
}

btn_add.onclick = addItem;

function addItem() {
    // get input value
    let input = document.querySelector('.todo-input input');
    if (input.value.trim().length <= 0) {
        return;
    }
    // create new object
    let todo_status = document.querySelector('.todo-option');
    let newID = create_UUID();
    let newTodo = { id: newID, title: input.value.trim(), status: false };
    // push obj to list
    todoList.push(newTodo);
    // console.log(todoList);
    // render UI again
    renderUI(todoList);
}

function getOptionSelected() {
    for (let i = 0; i < todo_option_item.length;) {
        if (todo_option_item[i].checked) {
            return parseInt(todo_option_item[i].value);
        }
    }
}

console.log(todo_option_item);  

todo_option_item.forEach(item => {
    // create event for radio button
    item.addEventListener('change', function () {
        renderUIbyStatus(item.value);
    })
});

function renderUIbyStatus(status) {
    let newTodo = [];
    switch (status) {
        case '1':
            newTodo = todoList;
            break;
        case '2':
            newTodo = todoList.filter(todo => true == todo.status)
            break;
        case '3':
            newTodo = todoList.filter(todo => false == todo.status)
            break;
        default:
            newTodo = todoList;
            break;
    }
    console.log(newTodo);
    renderUI(newTodo);
}

function updateTodo(id) {
    // changeToUpdateBtn(id);
    console.log("updateTodo", id);
    let newTitle = todo_input.value;
    console.log(newTitle);
    todoList.forEach(todo => {
        if (todo.id == id) {
            todo.title = newTitle;
        }
    })
    renderUI(todoList);
    changeToAddBtn();

}

function changeToUpdateBtn(id) {
    btn_add.innerText = 'Cập nhật';
    let textChange = '';
    todoList.forEach(todo => {
        if (todo.id == id) {
            textChange = todo.title;
        }
    });
    todo_input.value = textChange;
    btn_add.onclick = function () {
        updateTodo(id);
    };
}

function changeToAddBtn() {
    btn_add.innerText = "Thêm";
    todo_input.value = '';
    btn_add.onclick = addItem;
}

function init() {
    renderUI(todoList);
}

window.onload = init();