//Синхронний код
console.log("1");
console.log("2");
console.log("3");

//Де з’являється асинхронність
console.log("Початок");

setTimeout(() => {
  console.log("Пройшло 2 секунди");
}, 2000);

console.log("Кінець");

//другий приклад 
console.log("Замовив піцу");

setTimeout(() => {
  console.log("Піца приїхала");
}, 3000);

console.log("Поки чекаю — дивлюсь фільм");