console.log('----------------------------------------Hamster---------------------------------------------------')
class Hamster{
    constructor(owner, name, price){
      this.owner = owner;
      this.name = name;
      this.price = price;
    }
    wheelRun(){
      console.log(`When hamster named ${this.name} running the wheel, you can hear 'squeak squeak'`);
    }
    eatFood(){
      console.log(`When hamster named ${this.name} is eating, you can hear 'nibble nibble'`);
    }
    getPrice(){
      return ` ${this.owner} bought  ${this.name}  for $${this.price}`;
    }
  }
  const action1 = new Hamster('Billy', 'Pumpkin', 100);
  action1.wheelRun();
  action1.eatFood();
  console.log(action1.getPrice())
  
  
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
        return `John is ${this.age} old`;
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
  
    ageUp(num1) {
      this.age+=num1+1;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    } 
   
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.price;
    }
  }
  
  const person = new Person("John");
  console.log(`${person.getName()} is here!`); 
  person.greet(); 
  person.eat();
  person.exercise();
  person.ageUp(50);
  console.log(person.getAge()); 
  console.log(`${person.name} is getting older. Age: ${person.age}, Height: ${person.height}, Weight: ${person.weight}, the mood scale from 0 to 10 is  ${person.mood}, Bank Account: ${person.bankAccount}`)

  
  const hamster = new Hamster(person.name, 'Puff', 105)
  person.buyHamster(hamster);
  console.log(`${person.hamsters[0].owner} has a pet hamster named '${person.hamsters[0].name}', he bought '${person.hamsters[0].name}' for $${person.hamsters[0].price} `); 
  console.log(`${person.hamsters[0].owner}'s mood on the scale 0 to 10, is ${person.mood}`); 
  console.log(`Even though his bank acount balance is $${person.bankAccount}`); 
  
  console.log('-------------------Story------------------');
  
