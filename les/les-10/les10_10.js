//Звичайний метод
class Book {
  constructor(title) {
    this.title = title;
  }

  printTitle() {
    console.log(this.title);
  }
}

const book1 = new Book("Harry Potter");
book1.printTitle(); 

//Статичний метод
class Book {
  static sayHello() {
    console.log("Привіт, я клас Book");
  }
  static categori = "Література"
}

Book.sayHello(); 
console.log(Book.categori)

//не можна:
const book1 = new Book();
book1.sayHello(); 

//статичні властивості
class User {
  static role = "guest";

  constructor(name) {
    this.name = name;
  }
}

console.log(User.role);