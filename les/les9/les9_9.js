
let user = {
  name: "Іван",
  age: 30
};

const newUser = {...user}
console.log(newUser)


let user = {
  name: "Іван",
  isadmin: true,
  age: 30
};
const updateUser = {
    ...user,
    age: 31
}
console.log(updateUser)


const user = {
  name: "Іван",
  age: 25
};

const address = {
  city: "Київ",
  country: "Україна"
};

const fullName = {
    ...user,
    ...address
}

console.log(fullName)