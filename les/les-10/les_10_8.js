//prototype
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(`Привіт, я ${this.name}`);
};

const user1 = new User("Іван");
const user2 = new User("Оля");

user1.sayHello(); 
user2.sayHello(); 

//можна 
function makeUser(name) {
  return {
    name,
    sayHello() {
      console.log(`Привіт, я ${this.name}`);
    }
  };
}

// a через prototype
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(`Привіт, я ${this.name}`);
};