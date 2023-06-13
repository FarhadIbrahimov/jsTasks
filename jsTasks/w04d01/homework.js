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
 
  class Person {
    constructor(name) {
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
  
    ageUp(num1) {
      this.age+=num1+1;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
      console.log(`${this.name} is getting older. Age: ${this.age}, Height: ${this.height}, Weight: ${this.weight}, the mood scale from 0 to 10 is  ${this.mood}, Bank Account: ${this.bankAccount}`)
    } 
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.price;
    }
  }
  
  const person = new Person("John");
  console.log(person.getName()); 
  person.greet(); 
  person.eat();
  console.log(person.getWeight()); 
  person.exercise();
  console.log(person.getWeight());
  person.ageUp(50);
  console.log(person.getAge()); 
  
  const hamster = new Hamster(person.getName(), "Pumpkin", 100);
  person.buyHamster(hamster);
  console.log(person.hamsters); 
  console.log(person.mood); 
  console.log(person.bankAccount); 
  
