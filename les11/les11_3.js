//Promise
//Синтаксис Promise
const promise = new Promise((resolve, reject) => {
  // код асинхронної операції
});

//Приклад 
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Операція виконана успішно");
  } else {
    reject("Сталася помилка");
  }
});