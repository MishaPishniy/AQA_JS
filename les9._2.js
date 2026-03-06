//оператор “in”

let user = {};

console.log( user.noSuchProperty === undefined );

//

let user = { name: "Іван", age: 30 };

let key = "age"
console.log( key  in user ); 
console.log( "blabla" in user );

//
let user = { name: "Іван", age: 30 };

console.log( "age" in user ); 
console.log( "blabla" in user );

//випадок коли undefined не підходить
let obj = {
  test: null
};

console.log( obj.test  === undefined ); // виведеться undefined, значить властивість не існує?

console.log( "test" in obj ); // true, властивість існує!

