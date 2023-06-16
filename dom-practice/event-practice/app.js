const btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
  // testing!
  console.log(evt);  
});

/* 
const btn = document.querySelector('button');:

This line selects the first <button> element on the web page using the document.querySelector() method.
It assigns the selected button element to the btn variable using the const keyword.
btn.addEventListener('click', function(evt) { ... });:

This line adds an event listener to the button element.
The event listener listens for the 'click' event, which occurs when the button is clicked.
When the 'click' event is triggered, the function inside the event listener is executed.
function(evt) { ... }:

This is an anonymous function, meaning it doesn't have a name.
It is the function that will be executed when the button is clicked.
The function takes an event object, conventionally named evt (short for event), as a parameter.
Inside this function, you can write code to perform certain actions or tasks when the button is clicked.
console.log(evt);:

This line logs the event object evt to the console.
The event object contains information about the event that occurred, such as the type of event, target element, mouse position, and more.
By logging the event object, you can inspect its properties and use them as needed for your application.
*/