// Bài 1: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
function randomNumber(arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
}

// Bài 2: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function sufferArr(arr) {
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(randomNumber(arr));
    }
    return arrResult;
}

// Bài 3: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng

function removeDupNum(arr) {
    return arr.filter((el, index) => arr.indexOf(el) == index)
}

function intersection2Arr(arr1, arr2) {
    arr1 = removeDupNum(arr1);
    arr2 = removeDupNum(arr2);
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let arrResult = [];
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] < arr2[j]) {
                break;
            }
            if (arr1[i] == arr2[j]) {
                arrResult.push(arr1[i]);
                break;
            }
        }
    }
    return arrResult;
}

// Bài 4: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
function symmetricDifference(arr1, arr2) {
    arr1 = removeDupNum(arr1);
    arr2 = removeDupNum(arr2);
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
    return arr1.concat(arr2);
}

// Bài 5: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
function union2Arr(arr1, arr2) {
    return removeDupNum(arr1.concat(arr2));
}

// Bài 6: Viết chương trình JavaScript để tạo mã màu HEX ngẫu nhiên.
// 16777215 = FFFFFF (16)
function randomHexColorCode() {
    return ("#" + Math.floor(Math.random() * 16777215).toString(16));
}

// Bài 7: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
function subStrArr(str) {
    let arrResult = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = (i + 1); j <= str.length; j++) {
            arrResult.push(str.substring(i, j));
        }
    }
    return arrResult;
}

// Bài 8: Kiểm tra mảng xem có phải mảng tăng dần hay không
function checkAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false
        }
    }
    return true;
}

// Bài 9: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
function checkOddDecrease(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1] || arr[i] % 2 == 0) {
            return false
        }
    }
    if (arr[arr.length] % 2 == 0) {
        return false
    }
    return true
}

// Bài 10: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể 
// (không tính số 0 đầu tiên).
function swapNumToSmallest(number) {
    number = number.toString();
    console.log("10");
    let arrTemp = number.split("");
    arrTemp.sort((a, b) => (a - b));
    for (let i = 0; i < arrTemp.length; i++) {
        if (arrTemp[i] == 0) {
            if (arrTemp[i + 1] != 0) {
                let temp = arrTemp[i + 1];
                arrTemp.splice(i + 1, 1);
                arrTemp.unshift(temp);
                break;
            }
        } else {
            break;
        }
    }
    return arrTemp.join("");
}
