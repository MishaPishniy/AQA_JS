//Де є все
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} видає звук`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} гавкає`);
  }
}

const dog = new Dog("Рекс");
dog.speak();