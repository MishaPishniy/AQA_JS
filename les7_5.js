function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

function sum2 (a ) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const suma = sum2(3)
console.log(suma(0)(0))

console.log(sum2(1)(2)(3))




function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5))
console.log(double(10))


// без композиція 
const add1 = x => x + 1;
const double2 = x => x * 2;

// double2(add1(5));


// з композиція 
const compose = (f, g) => x => f(g(x));

const result = compose(double2, add1);
result(5);
