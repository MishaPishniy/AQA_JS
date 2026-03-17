//Цикл "for..in"
/* 
for (key in object) {
  // тіло циклу виконується для кожної властивості об’єкта
}
  */

let user = {
	name: 'Іван',
	age: 30,
	isAdmin: true
};

for (let key in user) {
	// ключі
	console.log(key); // name, age, isAdmin
	// значення ключів
	console.log(user[key]); // Іван, 30, true
}
