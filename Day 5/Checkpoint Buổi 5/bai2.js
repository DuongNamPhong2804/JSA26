const n = parseInt(prompt("Nhập chiều cao của tam giác cân:"));


for (let i = 1; i <= n; i++) {
  let row = "";


  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }


  row += "*";


  for (let j = 1; j <= 2 * i - 3; j++) {
    row += " ";
  }


  if (i !== n) {
    row += "*";
  }

  console.log(row);
}
