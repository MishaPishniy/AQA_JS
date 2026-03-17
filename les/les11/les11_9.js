//async/await
async function sayHello() {
  return "Привіт";
}

sayHello().then((result) => {
  console.log(result);
});
//це приблизно те саме
function sayHello() {
  return Promise.resolve("Привіт");
}
sayHello().then((result) => {
  console.log(result);
});


//приклад 2 
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані отримані");
    }, 2000);
  });
}

async function showData() {
  const result = await getData();
  console.log(result);
}

showData();

//await
async function showMessage() {
  const result = await Promise.resolve("Готово");
  console.log(result);
}

showMessage();

//приклад 
function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Минуло 2 секунди");
    }, 2000);
  });
}
//икористаємо await
async function run() {
  const message = await waitTwoSeconds();
  console.log(message);
}

run();