class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Іван", 20);

console.log(user.name); 
user.age = -100;
console.log(user.age); 


//Як виглядає get і set

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
   if (value.length <= 2 ) {

      console.log("Імя повинно бути більше 2 символів")
      return;
    }
    this._name = value;
  }
}

const user = new User("Іван");

console.log(user.name); 
user.name = "WE";
console.log(user.name);

//чому _name
class User {
  set name(value) {
    this.name = value;
  }
}