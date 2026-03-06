//Перебір масиву
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

const arr = ["a", "b", "c"];
for (const item of arr) {
  console.log(item);
}




//ВИкористання точно з індексом 
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    console.log(arr[i]);
  }
}


// for of 
const arr = ["a", "b", "c"];
let index = 0;

for (const item of arr) {
  if (index % 2 === 0) {
    console.log(item);
  }
  index++;
}