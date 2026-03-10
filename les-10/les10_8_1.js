//різниця між prototype і ооп наслідування
//prototype chain.
const animal = {
  eats: true
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); 
console.log(dog.eats);  


//Приклад через class
class Animal {
  eat() {
    console.log("Я їм");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Гав");
  }
}

const dog = new Dog();

dog.eat();  
dog.bark(); 


//без класу 
function Animal() {}

Animal.prototype.eat = function () {
  console.log("Я їм");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("Гав");
};

const dog = new Dog();

dog.eat();  
dog.bark(); 


//ще варіант 
class User {
  sayHi() {
    console.log("Привіт");
  }
}

const u1 = new User();
u1.sayHi();

//prototype
function User() {}

User.prototype.sayHi = function () {
  console.log("Привіт");
};

const u1 = new User();
u1.sayHi();