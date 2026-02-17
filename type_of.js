let a ; 
console.log(typeof a)

let b  = 42;
console.log(typeof b)

let c = [1,2,3]
console.log(typeof c)

let d = null;
console.log(typeof d)

let e = function() {

}
console.log(typeof e)


function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    console.error('Аргументи повинні бути числами!');
    return null;
  }
  return x + y;
}

console.log(add(5,4))

let sum = (a + b) * c

 // ?? - нулеве злиття 

 let name = null
 console.log( name ?? "Студент")

 let age = 0
 console.log(age ?? 30)
 console.log(age || 20)
