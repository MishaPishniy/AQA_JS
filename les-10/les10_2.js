//Об’єктно-орієнтована парадигма (OOP)
const user = {
  name: "Іван",
  age: 20,
  sayHello() {
    console.log(`Привіт, мене звати ${this.name}`);
  }
};

user.sayHello();