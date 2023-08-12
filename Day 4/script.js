/*let box = document.getElementById("box");
box.innerText = "Phương";
box.style.color = "red";
box.style.width = "500px";
box.style.height = "500px";
*/

/*let line1Element = document.getElementsByClassName("line1");
console.log(line1Element[1]);

let listLiElement = document.getElementsByTagName("li");
listLiElement[0].style.fontSize = "50px"
listLiElement[0].style.color = "blue"

listLiElement[1].style.fontSize = "60px"
listLiElement[1].style.color = "green"

listLiElement[2].style.fontSize = "70px"
listLiElement[2].style.color = "red"
*/


let horizontalLine = document.createElement('hr');
horizontalLine.style = '1px solid white';
horizontalLine.style.marginLeft = '100px';
horizontalLine.style.marginRight = '100px';


let div = document.createElement('div');
div.className = 'container';
div.style.width = '500px';
div.style.height = '800px';
div.style.backgroundColor = 'blue';
div.style.textAlign = 'center';
div.style.color = 'white';


let img = document.createElement('img');
img.style.justifyContent = 'center';
img.style.width = '100px';
img.style.height = '100px';
img.style.borderStyle = 'solid';
img.style.borderWidth = '10px';
img.style.marginTop = '100px';
img.src = 'anh1.jpg';


let h1 = document.createElement('h1');
h1.innerText = 'Duong Nam Phong';


let h3 = document.createElement('h3');
h3.innerText = "I'm a programmer";


let paragraph1 = document.createElement('p');
paragraph1.style.marginTop = '300px';
paragraph1.textContent = 'Hanoi, Vietnam';

let paragraph2 = document.createElement('p');
paragraph2.textContent = '+84.865967813';

let paragraph3 = document.createElement('p');
paragraph3.textContent = 'me@duongnamphong.com';


div.appendChild(img);
div.appendChild(h1);
div.appendChild(h3);
div.appendChild(paragraph1);
div.appendChild(paragraph2);
div.appendChild(paragraph3);
div.insertBefore(horizontalLine, h1.nextSibling);
document.body.appendChild(div);
