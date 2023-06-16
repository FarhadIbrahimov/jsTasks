const btn = document.querySelector('button');
const ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    const li = document.createElement('li');
    const input = document.querySelector('input');
    li.textContent = input.value
    // add the li to the ul using appendChild
    ul.appendChild(li);
    input.value = '';
})



function handleClick(evt){
    if (evt.target.localName)
    
}
// ul.addEventListener('click', function(evt) {
//     console.log(evt);
// });
/* Practice: Write the code to change the color of the text of a clicked comment.*/


