class Animal {
    constructor(name, owner, voice) {
      this.name = name;
      this.owner = owner;
      this.voice = voice;
    }
  
    speak() {
      console.log(`${this.name} says ${this.voice}`);
    }
  
    move(stepsNum) {
      console.log(`${this.name} moves by ${stepsNum} step`);
    }
  
    belongsTo() {
      console.log(`${this.name} belongs to ${this.owner}`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, owner, voice) {
      super(name, owner, voice);
    }
    
    
  }
  
  class Dog extends Animal {
    constructor(name, owner, voice) {
      super(name, owner, voice);
    }
    
    
  }
  
  const garfield = new Cat("Garfield", "John", "I hate Mondays");
  const scoobydoo = new Dog("Scooby-Doo", "Shaggy", "Scooby-Doo Scooby-Doo");
  
  garfield.speak();
  garfield.move(3);
  garfield.belongsTo();
  scoobydoo.speak();
  scoobydoo.move(4);
  scoobydoo.belongsTo();
