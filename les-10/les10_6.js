//Абстракція
class CoffeeMachine {
  turnOn() {
    console.log("Кавомашина увімкнена");
    this.#heatWater();
    this.#makeCoffee();
  }

  #heatWater() {
    console.log("Вода нагрівається");
  }

  #makeCoffee() {
    console.log("Кава готується");
  }
}

const machine = new CoffeeMachine();
machine.turnOn();