let x = 100;
let y = "Apple";

let z = x/y;
console.log(z)

let x1 = 100;
let y2 = 0;

let z1 = x1/y2;
console.log(z1)

let sum = (0.1*10 + 0.2*10 )/10
console.log(sum)




let x3 = 0.1 
let y3 = 0.2
let sum1 = x3+y3;
console.log((sum1).toFixed(2))

let s = Math.round(4.5)
console.log(s)


Number.EPSILON

let a = 0.2 + 0.1 
 a === 0.3  // false 

 let a1 = Math.abs((0.1 + 0.2) - 0.3 ) < Number.EPSILON //  0.000000000000000022
 console.log(a1)


 let name = "shaha"
 const text = `MIsha new,hello ${name}`
 console.log(text)

 console.log(text[5])

 console.log(text[text.length-1] )


console.log(5%2)
console.log(5/2)
console.log(5%5)

let a3 = 5;
a3++
console.log(a3)



let s1 = null
let t = undefined
console.log(s1 === t )

      
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(0||5 )
console.log("ccz" || "DNKJH")
console.log(null || "ok")
console.log(false || 2 )
console.log(undefined || false )

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false);//false


console.log("asas"&&5)
console.log(null&&"fsafsa")