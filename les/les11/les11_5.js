//Ланцюжок then() у Promise

Promise.resolve(5)
  .then((num) => {
    console.log("Перший then:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Другий then:", num);
    return num + 3;
  })
  .then((num) => {
    console.log("Третій then:", num);
  });

  //приклад 
  const myPromise = new Promise((resolve, reject) => {
  const serverWorked = true;

  if (serverWorked) {
    resolve("Дані отримані");
  } else {
    reject("Сервер не відповідає");
  }
});

myPromise
  .then((data) => {
    console.log("1 then:", data);
    return data + " успішно";
  })
  .then((newData) => {
    console.log("2 then:", newData);
    return newData ;
  })
  .then((finalData) => {
    console.log("3 then:", finalData);
  })
  .catch((error) => {
    console.log("Помилка:", error);
  });