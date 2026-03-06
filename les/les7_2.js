//Приклад анонімної функції
const sayHello = function () {
  console.log("Привіт!");
};

sayHello();

//Анонімна функція як callback (дуже часто)
setTimeout(function () {
  console.log("Минуло 2 секунди");
}, 2000);


//стрілкова
setTimeout(() => {
  console.log("Готово");
}, 1000);

//  анонімна помилка
(function () {
    console.log("Я не маю імені ");
} ) () 


//IIFE
(function () {
  console.log("Я виконалась одразу");
})();

//IIFE зі стрілочною функцією
(() => {
  console.log("Стрілочна IIFE");
})();

//IIFE з параметрами
(function (name) {
  console.log("Привіт,", name);
})("Олексій");