//Інкапсуляція
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год`);
  }
}

const car1 = new Car("BMW", 120);
car1.drive();