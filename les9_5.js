// користувач без властивості "address"
let user = {}; 


console.log(user.address.street)

// рішення 
let user = {};

console.log(user.address ? user.address.street : undefined);

//Спробуймо отримати доступ до user.address.street.name.
let user = {}; // користувач без властивості "address"

console.log(user.address ? user.address.street ? user.address.street.name : null : null);

//рішення логічний оператора &&

let user = {}; // користувач без властивості "address"

console.log( user.address && user.address.street && user.address.street.name );


//Опціональний ланцюжок ?. 

let user = {}; // користувач без властивості "address"

console.log( user.address?.street ); 