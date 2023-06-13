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
      this.weight = 0; // Typo: Corrected the spelling of 'weight'
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0; // Added 'this' to refer to the class property
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getWeight() {
      return this.weight;
    } // Added 'get' prefix to the method name
  
    greet() {
      console.log(`Hello ${this.name}!`);
    }
  
    eat() {
      this.weight++; // Increment 'weight' instead of 'wiehgt'
      this.mood++;
    }
  
    exercise() {
      this.weight--; // Increment 'weight' instead of 'wiehgt'
    }
  
    ageUp(num1) {
      this.age+=num1+1;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
      console.log(`${this.name} is getting older. Age: ${this.age}, Height: ${this.height}, Weight: ${this.weight}, the mood scale from 0 to 10 is  ${this.mood}, Bank Account: ${this.bankAccount}`)
    } // Renamed method to 'ageUp' to avoid conflicts with 'age' property
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.price;
    }
  }
  
  const person = new Person("John");
  console.log(person.getName()); // Output: John
  person.greet(); // Output: Hello John!
  person.eat();
  console.log(person.getWeight()); // Output: 1
  person.exercise();
  console.log(person.getWeight()); // Output: 0
  person.ageUp(50);
  console.log(person.getAge()); // Output: 1
  
  const hamster = new Hamster(person.getName(), "Pumpkin", 100);
  person.buyHamster(hamster);
  console.log(person.hamsters); // Output: [Hamster]
  console.log(person.mood); // Output: 10
  console.log(person.bankAccount); // Output: -100
  
