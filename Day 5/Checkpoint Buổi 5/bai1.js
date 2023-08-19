function tinhGiaiThua(n) {
  if (n < 0) {
    return "Không có giải thừa cho số âm";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let giaiThua = 1;
    for (let i = 2; i <= n; i++) {
      giaiThua *= i;
    }
    return giaiThua;
  }
}

let n = parseInt(prompt("Nhập số nguyên dương n:"));
let giaiThuaN = tinhGiaiThua(n);
console.log(`Giải thừa của ${n} là: ${giaiThuaN}`);
