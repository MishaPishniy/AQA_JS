//class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} завелась`);
  }
}

//Як створити об’єкт з класу
const car1 = new Car("BMW", "X5");
car1.start();


//Без класу
const user1 = {
  name: "Іван",
  sayHi() {
    console.log(`Привіт, я ${this.name}`);
  }
};

//з класом
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Привіт, я ${this.name}`);
  }
}

const user2 = new User("Іван");
const user3 = new User("Оля");


//в автоматизації 
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://example.com");
  }
}