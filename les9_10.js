const user = {
  name: "Іван",
  age: 25,
  city: "Київ"
};

const { name, ...rest } = user;

//console.log(name);
console.log(rest);



const user = {
  name: "Іван",
  age: 25,
  city: "Київ"
};

function infoUser(obj) {

    console.log(obj)

}

infoUser({user})