// Kodilla task 9.5 

var buttonItemsClass = document.getElementsByClassName('button');
var buttonItemsClassNumber = buttonItemsClass.length;

console.log(buttonItemsClass);
console.log(buttonItemsClassNumber);

for (i = 0; i < buttonItemsClassNumber; i++) {

	alert(buttonItemsClass[i].innerText);
}