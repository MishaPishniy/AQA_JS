//Наслідування
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} видає звук`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} гавкає`);
  }
}



const cat = new Animal("Муркотик")

cat.bark();
cat.speak();

const dog1 = new Dog("Рекс");
dog1.speak();
dog1.bark();