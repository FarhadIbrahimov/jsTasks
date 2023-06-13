let h1 = document.getElementById('title');// Retrieve the element with id "title" and assign it to the variable 'h1'
console.log(h1);// Log the 'h1' element to the console

let pTag = document.querySelector('p'); // Select the first <p> element in the document and assign it to the variable 'pTag'
console.dir(pTag); // Log the 'pTag' element to the console, displaying its properties and details

console.log(pTag.innerHTML); // Log the HTML content of the 'pTag' element to the console
console.log(pTag.textContent);// Log the plain text content of the 'pTag' element to the console

pTag.style.backgroundColor = 'blue';// Set the background color of the 'pTag' element to blue
pTag.style.color = 'white';// Set the text color of the 'pTag' element to white

h1.style.textAlign = 'center';// Set the text alignment of the 'h1' element to center

console.log(h1.hasAttribute('style'));// Check if the 'h1' element has the 'style' attribute
console.log(h1.getAttribute('id'));// Get the value of the 'id' attribute of the 'h1' element and log it to the console

h1.setAttribute('id', 'bob');// Set the value of the 'id' attribute of the 'h1' element to 'bob'
console.log(h1.getAttribute('id'));// Get the updated value of the 'id' attribute of the 'h1' element and log it to the console

let aTag = document.querySelector('#link');// Select the element with id "link" and assign it to the variable 'aTag'
aTag.setAttribute('href', 'https://www.google.com');// Set the value of the 'href' attribute of the 'aTag' element to 'https://www.google.com'
console.log(aTag.getAttribute('href'));// Get the updated value of the 'href' attribute of the 'aTag' element and log it to the console

console.log(h1.classList.contains('main-title'));// Check if the 'h1' element has the CSS class 'main-title' and log the result to the console
//returns an array - like object (HTMLCollection)
//can't use with forEach loop because it is a collection
let liTags = document.getElementsByTagName('li');// Retrieve all the <li> elements in the document and assign them to the variable 'liTags'
let liTags2 = document.getElementsByClassName('comment');// Retrieve all elements with the class name 'comment' and assign them to the variable 'liTags2'
//returns Node list, can us with forEach loop
let liTags3 = document.querySelectorAll('.comment');// Retrieve all elements with the CSS selector '.comment' and assign them to the variable 'liTags3'

console.log(liTags);// Log the 'liTags' variable, which contains all the <li> elements, to the console
console.log(liTags2);// Log the 'liTags2' variable, which contains elements with the class name 'comment', to the console
console.log(liTags3);// Log the 'liTags3' variable, which contains elements with the CSS selector '.comment', to the console


for(let i = 0; i < liTags3.length; i++){
console.log(liTags3[i]);}
 for(let liTag of liTags3) {
    liTag.style.fontSize = '30px';
 }
liTags3.forEach((li) => console.log(li));