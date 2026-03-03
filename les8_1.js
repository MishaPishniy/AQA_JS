//Масив  
const numbers = [10, 20, 30];
const names = ["Misha", "Olya", "Yarik"];
const mixed = [1, "text", true, null];

console.log(names[0]); 
console.log(names.length); 
console.log(names[names.length - 1]);

//Доступ до елементів і зміна

const users = ["Ann", "Bob", "Kate"];
console.log(users);  
users[1] = "Bobby";   
console.log(users);  

//погано
users[5] = "X";      
console.log(users.length);
console.log(users); 

//Додавання / видалення елементів
const a = [1, 2];
console.log(a); 
a.push(3);     // додати в кінець
console.log(a); 

const last = a.pop(); // забрати з кінця
console.log(last);
console.log(a); 



const b = [2, 3];

b.unshift(1); // додати на початок
console.log(b); 

const first = b.shift(); // забрати з початку
console.log(first); 
console.log(b); 

//Старий варіант оголошення масиву 
const a1 = new Array (3,4,5)