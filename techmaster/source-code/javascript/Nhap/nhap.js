




// 6
function getKey(ob) {
    let arrKey = []
    for (const key in ob) {
        if (ob.hasOwnProperty(key)) {
            arrKey.push(key);
        }
    }
    return arrKey;
}

// function getKey2(ob) {
//     return ob.map(ele => ele.getKey);
// }

// 7
function getValue(ob) {
    let arrValue = []
    for (const key in ob) {
        if (ob.hasOwnProperty(key)) {
            arrValue.push(ob[key]);
        }
    }
    return arrValue;
}

// 8
function checkKey(ob, keyCheck) {
    for (const key in ob) {
        if (key.localeCompare(keyCheck) == 0) {
            return true;
        }
    }
    return false;
}

// 9
function getLengthValue(ob) {
    let length = 0;
    for (const key in ob) {
        if (ob.hasOwnProperty(key)) {
            length++;
        }
    }
    return length;
}

// 10
function filterAge25(params) {
    var arr = params.filter(ele => ele.age > 25 && ele.isStatus == true)
    return arr;
}

// 11
function sortByAge(params) {
    return params.sort(function (a, b) {
        return (a.age - b.age);
    });
}
