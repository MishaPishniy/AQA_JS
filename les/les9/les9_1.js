//Скорочений запис властивості зі змінної  (фабрики)

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("Іван", 30);
console.log(user.name);
let user2 = makeUser("Саша", 31);
console.log(user2.name);
let user3 = makeUser("Misha", 30);
console.log(user3.name);

//Оскільки назви ключів і змінних однакові
function makeUser(name, age) {
  return {
    name,
    age
  };
}
let user1 = makeUser("Іван", 30);
console.log(user1.name);

//можна і так 
let user2 = {
  name,  // те ж саме, що name:name
  age: 30
};

function makeUser(name) {
  return {
    name,  // те ж саме, що name:name
    age: 30
  };
}