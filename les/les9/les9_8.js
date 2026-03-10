const user = {
  name: "Іван",
  age: 25,
  city: "Київ"
};

const name = user.name;
const age = user.age;
const city = user.city;

console.log(name);
console.log(age);
console.log(city);


const user = {
  name: "Іван",
  age: 25,
  city: "Київ"
};

const { name : userName, age, city } = user;

console.log(userName);
console.log(age);
console.log(city);