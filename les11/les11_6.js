//Promise API.

//Promise.resolve()
const p = Promise.resolve(5);

p.then((result) => {
  console.log(result); 
});
//Promise.reject()
const p = Promise.reject("Щось пішло не так");

p.catch((error) => {
  console.log(error);
});
//Promise.all()
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

////Promise.all() помилка
const p1 = Promise.resolve("Користувач");
const p2 = Promise.resolve("Сервер товарів недоступний");
const p3 = Promise.resolve("Коментарі");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("Помилка:", error);
  });

//Promise.allSettled()
const p1 = Promise.resolve("OK");
const p2 = Promise.reject("Error");

Promise.allSettled([p1, p2])
  .then((results) => {
  console.log(results);
});

//Promise.race()
const p1 = new Promise((resolve) => setTimeout(() => resolve("Перший"), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Другий"), 2000));

Promise.race([p1, p2]).then((result) => {
  console.log(result); 
});
//Promise.any()
const p1 = Promise.reject("Помилка 1");
const p2 = Promise.resolve("Успіх 2");
const p3 = Promise.resolve("Успіх 3");

Promise.any([p1, p2, p3]).then((result) => {
  console.log(result); // "Успіх 2"
});

