document.addEventListener("DOMContentLoaded", function () {
  let paintButton = document.getElementById("paintButton");
  let paintDiv = document.getElementById("paintDiv");
  let colorInput = document.getElementById("colorInput");
  let textValue = document.getElementById("centerTextValue");

  paintButton.addEventListener("click", function () {
    let color = colorInput.value;
    let text = textValue.value;

    if (color && text) {
      paintDiv.style.backgroundColor = color;
      paintDiv.textContent = text;
    } else {
      alert("Vui lòng nhập cả tên hoặc mã màu và văn bản hiển thị ở chính giữa block.");
    }
  });
});
