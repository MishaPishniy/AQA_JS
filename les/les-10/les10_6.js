//Абстракція
class CoffeeMachine {
  turnOn() {
    console.log("Кавомашина увімкнена");
    this._heatWater();
    this.#makeCoffee();
  }

  _heatWater() {
    console.log("Вода нагрівається");
  }

  #makeCoffee() {
    console.log("Кава готується");
  }
}

const machine = new CoffeeMachine();
machine.turnOn();
machine._heatWater();