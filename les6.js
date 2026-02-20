// Function Declaration

/* function nameFunction (param1 , parm2 , parm3 ) {
 
код функціїї 
    let x = parm2 + parm3
    return x
}

nameFunction (1,3,4) - виклик функції 
*/

function sum ( a,b) {
    return a + b 
}

console.log(sum (4,2))

function sumNew ( a,b) {
    const x = a + b
    return x
}

console.log(sum (4,2))


sayHello(); // хостінг
function sayHello (){
    console.log("Hello")
}
sayHello();


//Function Expression

const greet = function (name) {
    return `Hello ${name}`
}

console.log(greet('Misha'))

//Arrow Function

const add = (x , y ) => x +  y 
console.log(add(3,5))

const squar = x => x * x

const sayHello = () => console.log("Hello")


//Ress

function sumAll (...num) {
    let total = 0 
    for ( const number of num) total += number;
    return total
 }
 console.log(sumAll(1,2,5,5))

//передали функцию
 function arrSum (arr) {
    console.log(arr)
 }
 const x = [1,2,3,4,5]
 arrSum(x)



 // значення по дефолту
function sumNew ( a = 4,b = 5) {
    const x = a + b
    return x
}

console.log(sumNew (1))


 
function sumNew ( arr = [1,2]) {
  console.log(arr)
}

sumNew ()
sumNew([1,2,3,4,5])

