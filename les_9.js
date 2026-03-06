//Порожній об’єкт 
let user = new Object(); // синтаксис "конструктора об’єктів"
let user = {};  // синтаксис "літералу об’єкта"


//Літерали та властивості
let user = {     
  name: "Іван",  
  age: 30        
};

console.log( user.name ); 
console.log( user.age ); 
console.log(user)

user.isAdmin = true;
console.log(user)

delete user.age;
console.log(user)


//Ім’я властивості може складатися з декількох слів
let user = {
  name: "Іван",
  age: 30,
  "likes birds": true  
};

//user.likes birds = false   //помилка

user["likes birds"] = false;
console.log(user["likes birds"]);



// доступ до властивості через змінну
let user = {
  name: "Іван",
  age: 30
};



let key = "name";          
console.log(user[key]);    

key = "age";
console.log(user[key]);

//помилка

let user = {
  name: "Іван",
  age: 30
};


let key = "name";
console.log( user.key )