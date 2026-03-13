//через функцію фабричну функцію
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

const user1 = makeUser("Іван", 20);
const user2 = makeUser("Оля", 22);

console.log(user1.name); 
console.log(user2.age);

//class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Привіт, мене звати ${this.name}`);
  }

  isAdult() {
    return this.age >= 18;
  }
}

const user1 = new User("Іван", 20);
user1.sayHello(); 
console.log(user1.isAdult()); 


//фабричну функцію повертати методи прямо в об’єкті
function makeUser(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Привіт, мене звати ${name}`);
    }
  };
}