//Поліморфізм
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} видає якийсь звук`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} каже: Гав-гав`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} каже: Няв-няв`);
  }
}

const dog = new Dog("Рекс");
const cat = new Cat("Мурка");

dog.speak();
cat.speak();