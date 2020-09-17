
// 1
function volumeOfSphere(radius) {
    return 4 / 3 * Math.PI * Math.pow(radius, 3);
}

// 2
function sumBetweenNum(a, b) {
    let sum = 0;
    for (let i = a + 1; i < b; i++) {
        sum += i;
    }
    return sum;
}
// 3
function checkPrimeNumber(number) {
    if (!Number.isInteger(number) || number < 2) return false;
    if (number == 2) return true;
    for (i = 2; i < Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }
    return true;
}

// 4
function sumPrimeNumber(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (checkPrimeNumber(i)) {
            sum += i;
        }
    }
    return sum;
}

// 5
function sumOfDivisor(number) {
    let sum = 0;
    for (i = 2; i <= number; i++) {
        if (number % i == 0) sum += i;
    }
    return sum;
}

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

// 12

function symmetricDifference(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] < arr2[j]) {
                break;
            }
            if (arr1[i] > arr2[j]) {
                continue;
            }
            if (arr1[i] == arr2[j]) {
                arr1.splice(i--, 1);
                arr2.splice(j--, 1);
                break;
            }
        }
    }
    // console.log(arr1);
    // console.log(arr2);
    return arr1.concat(arr2);
}