//Тут ми тільки створили Promise
const myPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Дані успішно отримані");
  } else {
    reject("Сталася помилка");
  }
});

//бробляємо результат
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


//Аналогія з функцією
function sum(a, b) {
  return a + b;
}

const result = sum(2, 3);
console.log(result);

