<<<<<<< HEAD
/*let point;
point = prompt("Nhập số điểm của bạn");

if (point < 15 && point <= 30) {
alert("Không đỗ trường nào cả");
} else if (point >= 23.05 && point <= 30) {
alert("Với số điểm là " + point + " thì đỗ được trường Kỹ Thuật Điện");
} else if (point >= 27.61 && point <= 30) {
    alert("Với số điểm là " + point + " thì đỗ được trường Kỹ Thuật Điều Khiển - Tự Động Hóa");
} else if (point > 23.55 && point <= 30) {
alert("Với số điểm là " + point + " thì đỗ được trường Hệ Thống Điện Và Năng Lượng Tái Tạo (CT Tiên Tiến)");
} else if (point > 25.99 && point <= 30) {
    alert("Với số điểm là " + point + " thì đỗ được trường Kỹ Thuật Điều Khiển - Tự Động Hóa (CT Tiên Tiến)");
} else if (point > 23.99 && point <= 30) {
    alert("Với số điểm là " + point + " thì đỗ được trường Tin Học Công Nghiệp Và Tự Động Hóa (Chương Trình Việt - Pháp PFIEV");
} */
let number = Number(prompt("Enter number?"));
let temp = 1;
for (let i = 1; i <= number; i++) {
  temp = temp * i;
}
=======
/*let point;
point = prompt("Nhập số điểm của bạn");

if (point < 15 && point <= 30) {
alert("Không đỗ trường nào cả");
} else if (point >= 23.05 && point <= 30) {
alert("Với số điểm là " + point + " thì đỗ được trường Kỹ Thuật Điện");
} else if (point >= 27.61 && point <= 30) {
    alert("Với số điểm là " + point + " thì đỗ được trường Kỹ Thuật Điều Khiển - Tự Động Hóa");
} else if (point > 23.55 && point <= 30) {
alert("Với số điểm là " + point + " thì đỗ được trường Hệ Thống Điện Và Năng Lượng Tái Tạo (CT Tiên Tiến)");
} else if (point > 25.99 && point <= 30) {
    alert("Với số điểm là " + point + " thì đỗ được trường Kỹ Thuật Điều Khiển - Tự Động Hóa (CT Tiên Tiến)");
} else if (point > 23.99 && point <= 30) {
    alert("Với số điểm là " + point + " thì đỗ được trường Tin Học Công Nghiệp Và Tự Động Hóa (Chương Trình Việt - Pháp PFIEV");
} */
let number = Number(prompt("Enter number?"));
let temp = 1;
for (let i = 1; i <= number; i++) {
  temp = temp * i;
}
>>>>>>> e946c98515c938344f5279b197b309aebe0f3aea
console.log(temp);