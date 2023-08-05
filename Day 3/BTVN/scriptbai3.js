<<<<<<< HEAD
//Phép cộng
function plus(a, b) {
    return a + b;
}

//Phép trừ
function minus(a, b) {
    return a - b;
}

//Phép nhân
function multiply(a, b) {
    return a * b;
}

//Phép chia
function divide(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}


let operation = parseInt(prompt("Bấm phím tương ứng để thực hiện các tác vụ tính toán:\n(1): Phép +\n(2): Phép -\n(3): Phép *\n(4): Phép /\n(0): Kết thúc"));

if (operation >= 1 && operation <= 4) {

    let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
    let num2 = parseFloat(prompt("Nhập số thứ hai:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Nhập không hợp lệ. Vui lòng nhập số.");
    } else {
        let result;
        switch (operation) {
            case 1:
                result = plus(num1, num2);
                break;
            case 2:
                result = minus(num1, num2);
                break;
            case 3:
                result = multiply(num1, num2);
                break;
            case 4:
                result = divide(num1, num2);
                break;
        }
        alert(`Kết quả: ${result}`);
    }
} else if (operation === 0) {
    alert("Cảm ơn bạn đã sử dụng trình tính toán!");
} else {
    alert("Nhập sai khoảng số.");
}
=======
//Phép cộng
function plus(a, b) {
    return a + b;
}

//Phép trừ
function minus(a, b) {
    return a - b;
}

//Phép nhân
function multiply(a, b) {
    return a * b;
}

//Phép chia
function divide(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}


let operation = parseInt(prompt("Bấm phím tương ứng để thực hiện các tác vụ tính toán:\n(1): Phép +\n(2): Phép -\n(3): Phép *\n(4): Phép /\n(0): Kết thúc"));

if (operation >= 1 && operation <= 4) {

    let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
    let num2 = parseFloat(prompt("Nhập số thứ hai:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Nhập không hợp lệ. Vui lòng nhập số.");
    } else {
        let result;
        switch (operation) {
            case 1:
                result = plus(num1, num2);
                break;
            case 2:
                result = minus(num1, num2);
                break;
            case 3:
                result = multiply(num1, num2);
                break;
            case 4:
                result = divide(num1, num2);
                break;
        }
        alert(`Kết quả: ${result}`);
    }
} else if (operation === 0) {
    alert("Cảm ơn bạn đã sử dụng trình tính toán!");
} else {
    alert("Nhập sai khoảng số.");
}
>>>>>>> e946c98515c938344f5279b197b309aebe0f3aea
