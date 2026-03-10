//this додавання функції к методу 
let user = {
  name: "Іван",
  age: 30
};

user.sayHi = function() {
  console.log("Привіт!");
};

user.sayHi(); 

// другий варіант 

let user = {
  name: "Іван",
  age: 30
};

function sayHi() {
 console.log("Привіт!");
}
 
user.sayHi = sayHi; // потім додамо її як метод

user.sayHi();


//Скорочений запис методу
user = {
  sayHi: function() {
    console.log("Привіт!");
  }
};
user.sayHi()

// скорочений 
user = {
name: "Misha",
  sayHi() { 
     console.log(this.name);
  }
};


let admin = user
user = null
admin.sayHi()