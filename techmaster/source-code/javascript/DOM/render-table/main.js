let student_warning = {
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "123456789",
            totalOff: 2,
            sessions: 14,
            detailInfo: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher_name: "Bùi Hiên"
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher_name: "Nguyễn Hàn Duy"
                }
            ]
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            totalOff: 2,
            sessions: 14,
            detailInfo: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher_name: "Bùi Hiên"
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher_name: "Nguyễn Hàn Duy"
                }
            ]
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            totalOff: 3,
            sessions: 14,
            detailInfo: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher_name: "Bùi Hiên"
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher_name: "Nguyễn Hàn Duy"
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher_name: "Nguyễn Hàn Duy"
                }
            ]
        }
    ],
    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789"
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321"
        }
    ]
}

let table = document.getElementById("table");
let tableInfo = document.querySelector("#table tbody");

student_warning.students.forEach((student, index) => {
    let column = student.detailInfo.length;
    for (let i = 0; i < column; i++) {
        let tr = document.createElement('tr');
        if (i == 0) {
            addTd(tr, (index + 1), column)
            addTd(tr, student.name, column)
            addTd(tr, student.email, column)
            addTd(tr, student.phone, column)
            addTd(tr, `${student.totalOff}/${student.sessions}`, column)
        } else {
        }
        let detailInfo = student.detailInfo[i];
        addDetailInfo(detailInfo, tr);
        tableInfo.appendChild(tr);

    }
});

function addDetailInfo(detailInfo, tr) {
    for (const key in detailInfo) {
        if (detailInfo.hasOwnProperty(key)) {
            const element = detailInfo[key];
            let td = document.createElement('td');
            td.innerHTML = element;
            tr.appendChild(td);
        }
    }
};

function addTd(tr, tdContent, column) {
    let td = document.createElement('td');
    td.innerHTML = tdContent;
    td.rowSpan = column;
    tr.appendChild(td);
};

let classInfo = document.getElementById('class');
classInfo.innerHTML = student_warning.class;

let course = document.getElementById('course');
course.innerHTML = student_warning.course

let sessions = document.getElementById('sessions');
sessions.innerHTML = student_warning.sessions

let teachers = document.getElementById('teachers');
let ul = document.createElement('ul');
student_warning.teachers.forEach(ele => {
    ul.insertAdjacentHTML('beforeend', `<li>${ele.name} (${ele.email} - ${ele.phone})</li>`);
});
teachers.innerHTML = ul.innerHTML;



