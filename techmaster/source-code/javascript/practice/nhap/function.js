// Nhap
// const
{
    const user = {
        name: "Vuong Fly", age: 24
    }
    console.log(user);
    try {
        user = {
            name: "Vuong Fly", age: 23
        }
        console.log(user);
    } catch (error) {
        console.log(error);
    }
    user.age = 14;
    console.log(user);
    // 
    arr = [12, 4, 5, 345, 1, 2, 3];
    const arrTemp = arr;
    arr.sort((a, b) => a - b);
    console.log("arrTemp: " + arrTemp);
    console.log(`arr: ${arr}`);
}

// backtick ``


// template string

{
    let firstName = 'Vuong'
    let lastName = 'Fly'
    let subject = ["A", "B", "C"];

    function sum(a, b) {
        return a + b;
    }

    let fullName = `${firstName} ${lastName} ${subject}
8 + 8 = ${sum(8, 8)}
`

    console.log(fullName);
}

// Distructoring

// Array
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let [a1, b1, ...rest] = arr;
    console.log(a1, b1, rest);
}

// User
{
    let user = {
        name: "Vuong Fly", age: 24
    }

    let { name, age } = user;
    console.log(user);
}

// Nested Object

{
    let person = {
        info: {
            name: 'Vuong', age: 24, job: 'free'
        }
    }

    let { info: { name, age } } = person;
    console.log(name, age);
}

// Arrow Function
let shortenString = str => `${str.slice(0, 8)}...`;
console.log(shortenString("xin chao cac ban"));

let repeatString = str => (`${str}-`).repeat(10).substring(0, (str.length + 1) * 10 - 1);
console.log(repeatString("ab"));

let repeatString2 = str => {
    let result = str;
    for (let i = 0; i < 9; i++) {
        result += `-${str}`;
    }
    return result;
}

console.log(repeatString2("Fly"));

// Default Parameter

{
    let repeatStringN = (str = "default", time = 2) => (`${str}-`).repeat(time).substring(0, (str.length + 1) * time - 1);

    console.log(repeatStringN("Fly", 2));
    console.log(repeatStringN());
}

// Spread Parameter
{
    let numbers = [1, 3, 5, 6, 34, 5, 346, 25, 2, 234, 234, 23, 4];
    console.log(...numbers);
    console.log(`Max: ${Math.max(...numbers)}`);
    console.log(`Max: ${Math.max.apply(null, numbers)}`);
    console.log(`Max: ${Math.max.apply(Number, numbers)}`);

    let obj1 = { name: "Vuong", age: 24 };
    let obj2 = { name: "Fly", job: "Free" };

    let cloneObj = { ...obj1, ...obj2 };
    console.log(cloneObj);
}

// Rest Parameter
{
    let sum = (a, b) => a + b;
    console.log(sum(1, 2, 3, 4));

    sum = (...args) => {
        let sum = 0;
        args.forEach((arg) => sum += arg);
        return sum;
    }
    console.log(sum(1, 2, 3, 4));
    console.log(sum(1, 2, 3, 4, 5));

    // Rest para phải đặt ở cuối
    addList = (list, ...args) => {
        args.forEach((arg) => list.push(arg));
        return list;
    }

    console.log(addList([1, 2, 3], 4, 5, 6));
}
