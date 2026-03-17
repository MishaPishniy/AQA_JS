const users = [
	{ name: 'Іван', age: 25 },
	{ name: 'Олена', age: 30 },
	{ name: 'Петро', age: 22, isadmin: true }
];

console.log(users[0].name);

for (let i = 0; i < users.length; i++) {
	console.log(users[i].name);
}

for (const user of users) {
	console.log(user.name);
}

users[1].age = 31;
// додаання нового обїєкту
users.push({ name: 'Марія', age: 28 });
console.log(users);
