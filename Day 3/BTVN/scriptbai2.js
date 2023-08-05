let food = [];


let numberOfFood = parseInt(prompt("Nhập số lượng food muốn thêm:"));


for (let i = 0; i < numberOfFood; i++) {
    let foodName = prompt(`Nhập tên food thứ ${i + 1}:`);
    food.push(foodName);
}


console.log("Mảng food sau khi thêm:");
console.log(food);
