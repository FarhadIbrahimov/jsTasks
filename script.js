let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = ('title');

// Part 2
document.body.style.backgroundColor = 'red';

  // Part 3
  const favoriteThings = document.querySelector('#favorite-things');
  
  favoriteThings.querySelectorAll('li');

  favoriteThings.lastElementChild.remove();
  
//document.querySelector("#favorite-things").lastElementChild.remove();
  // Part 4
  const specialTitle = document.querySelectorAll('.special-title');

  for(let item of specialTitle){
    item.style.fontSize = '2rem';
  }

  // Part 5
      const pastRace = document.querySelector("#past-races");
       for(let item of pastRace.children){
        if(item.textContent === 'Chicago'){
          item.remove();
        }
      }
       

  // Part 6
const cityDenver = document.createElement('li');
cityDenver.innerText = 'Denver';
pastRace.appendChild(cityDenver);

  // Part 7
const blog = document.createElement('div');
blog.setAttribute('class', 'blog-post purple');
blog.innerHTML = `<h1>${cityDenver.innerText}</h1><p>I RACED FORMULA 1 ON COLFAX!</p>`

const main = document.querySelector('.main');
main.appendChild(blog);


  // Part 8

const qTitle = document.querySelector('#quote-title');
qTitle.addEventListener('click', function(){
  randomQuote();
 
} )

  // Part 9
const blogPost = document.querySelectorAll('.blog-post');
for(i of blogPost){
  for(j of i.children){
    j.style.pointerEvents = 'none';
}
i.addEventListener('mouseout',(event)=>{
  
    event.target.classList.toggle('purple')
    event.target.classList.toggle('red')
  
})
i.addEventListener('mouseenter',(event)=>{
  
    event.target.classList.toggle('red')
    event.target.classList.toggle('purple')
  
})


}


console.dir(event.target)
});
