/* if (умова x < 10) {
//якщо х<10 то цей блок коду 
} виконується цей код якщо x > 10 */

let x = 11 
if ( x <= 10 ) {
    console.log("x <= 10")
} 

if ( x > 10 ){
    console.log("x>10")
}

let number = 91

if ( number >= 90 ) {
    console.log("A")
} else if ( number >= 70) {
    console.log("B")
}else if ( number >= 60 ) {
    console.log("C")
}else {
    console.log('D')
}


let itsRain = true ;
let hasUmbrella = false ;

if (itsRain) {
    console.log("Дощь")

    if(hasUmbrella) {
        console.log("Гуляємо")
    } else {
        console.log("Додому")
    }

} else {
    console.log("Сонячно")
}

let itsRain = false ;
let hasUmbrella = true ;

if ( itsRain && hasUmbrella  ) { 
    console.log(" Гулять можно зонт ")
} else  if (itsRain) {
    console.log("Дощ нет зонта")
} else {
        console.log(" Нет дождя ")
}


if (isRaining && hasUmbrella) {
  console.log('Вы можете выйти на улицу, но не забудьте взять зонт.');
} else if (isRaining && !hasUmbrella) {
  console.log('Вы не можете выйти на улицу без зонта.');
} else {
  console.log('Вы можете выйти на улицу, погода хорошая.');
}


let day = 7; 

switch(day) {

case 1  : 
    console.log("понеділок")
    break;
case 2:
    console.log("вівторок")
    break;
case 3:
    console.log("С")
     break;
case 4:
    console.log("Ч")
     break;
case 5:
    console.log("П")
     break;
case 6:
case 7:
    console.log("ВС")
     break;
    default:
        console.log("НЕ має такого дня ")
}

let fuits = "aassa"

switch(fuits) {

    case "Банан": 
    console.log("Банан")
    break;

    case "яблуко":
    console.log("яблуко")
    break
}