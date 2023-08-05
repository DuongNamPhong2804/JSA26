/*function validateInput() {
    let inputData = '';

    while (true) {
        inputData = prompt("Nhập dữ liệu từ đầu vào:");


        if (inputData === null || inputData.trim() === '') {
            alert("Dữ liệu không được để trống. Vui lòng nhập lại.");
        } else {

            let hasWhitespace = false;
            for (let i = 0; i < inputData.length; i++) {
                if (inputData.charAt(i) === ' ') {
                    hasWhitespace = true;
                    break;
                }
            }


            if (hasWhitespace) {
                alert("Dữ liệu không được chứa khoảng trắng. Vui lòng nhập lại.");
            } else {

                break;
            }
        }
    }


    return inputData;
}


const validData = validateInput();
console.log("Dữ liệu hợp lệ:", validData);
alert("Dữ liệu hợp lệ!", validData);
*/

/*let favor1 = "basketball";
let favor2 = "tennis";
let favor3 = "football";

let listFavorSport = [favor1, favor2, favor3];
listFavorSport.push("golf")

let reversedList = [];
for (let i = listFavorSport.length - 1; i >= 0; i--) {
    reversedList.push(listFavorSport[i]);
}

/*for (let i = 0; i < listFavorSport.length; i++) {
    console.log(listFavorSport[i]);
}


for (let i = 0; i < reversedList.length; i++) {
    console.log(reversedList[i]);
}
*/

let person = {
    name: "MindX",
    location: "Hanoi",
    establishedYear: 2017,
    course: ("Python", "Javascript", "Computer Science");


    getAge: function () {
        return currentYear - this.yearFounded
        console.log(MindX.getAge(2023));
    },


}