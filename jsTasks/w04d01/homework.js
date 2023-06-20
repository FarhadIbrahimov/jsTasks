console.log('----------------------------------------Hamster---------------------------------------------------')
class Hamster{
    constructor(name){
      this.owner = '';
      this.name = name;
      this.price = 15;
    }
    wheelRun(){
      console.log("squek, squek");
    }
    eatFood(){
      console.log("nibble, nibble");
    }
    getPrice(){
      return this.price;
    }
  }
 
  console.log('----------------------------------------Person---------------------------------------------------')
 
  class Person  {
    constructor( name) {
      
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0; 
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0; 

    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
        return this.age;
    }
  
    getWeight() {
      return this.weight;
    } 
  
    greet() {
      console.log(`Hello ${this.name}!`);
    }
  
    eat() {
      this.weight++; 
      this.mood++;
    }
  
    exercise() {
      this.weight--; 
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    } 
   
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    }
  }
  
  console.log('-------------------Story------------------');

  const person1 = new Person('Timmy');

  for(let i = 0; i<5; i++){
   person1.ageUp();
   }
   console.log(person1)
console.log(`${person1.name}'s age is ${person1.getAge()}`)

  for( let i = 0; i<5; i++){
    person1.eat();
  }
  console.log(`After eating 5 times a day ${person1.name} gained ${person1.weight} lbs`)
  
  for(let i = 0; i<5; i++){
    person1.exercise();
  }
  console.log(`After exercising consistently ${person1.name} lost  ${person1.weight} lbs`)

  
for( let i = 5; i<9; i++){
    person1.ageUp();
    }
    console.log(`${person1.name}'s age is ${person1.getAge()}`)

const hamster1 = new Hamster('Gus');

hamster1.owner = person1.name;

console.log(`Hamster ${hamster1.name}'s owner is ${hamster1.owner}`);
   
person1.buyHamster(hamster1);

console.log(person1)

for (i= 9; i<15; i++){
  person1.ageUp()
}
for (i=0; i<2; i++){
  person1.eat();
  person1.exercise()
}
console.log(person1)

console.log('-------------------------------Chef Make Dinners----------------------------');

class Dinner {
  constructor(appetizer, entree, dessert){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef{
  cook(first, second, third){
    return new Dinner(first, second, third)
  }

}

const chef = new Chef();
const dinner1 = chef.cook('Salad', 'Steak', 'Chocolate Cake');
console.log(dinner1);
const dinner2 = chef.cook('Soup', 'Chicken', 'Ice-Cream');
console.log(dinner2);
const dinner3 = chef.cook('Wings', 'Seafood Extravaganza', 'Apple Pie');
console.log(dinner3);
console.log(`Your ${dinner1.appetizer} is served!`)
console.log(`Your ${dinner2.entree} is served!`)
console.log(`Your ${dinner3.dessert} is served!`)