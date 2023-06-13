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