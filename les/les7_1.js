//Callback Function

function sayHello() {
  console.log("Привіт!");
}

function doSomething(callback) {
  callback(); 
}

doSomething(sayHello);

setTimeout(function(){
    console.log("2 секунди")
}, 2000);

//

function result( res) {
    console.log("Результат:", res)
}

function calculate (a,b , callback) {

    const sum = a + b 
    return callback(sum)
}

calculate(4 , 5, result)


//
//приклад в плейрайті
await page.click(#sasas)

//HOF

function sayHello() {
  console.log("Привет");
}

function run(callback) {
  callback();
}

run(sayHello);


//HOF

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(8)); 