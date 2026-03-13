async function loadUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Помилка:", error);
  }
}

loadUser();

//послідовно виконання task1 task2 
async function add() {
  const a = await task1()
  const b = await task2()
  console.log(a,b)
}
add();

//паралельно виконання task1 task2 
async function add() {
  const promis1  =  task1()
  const promis2  =  task2()

  const a = await promis1()
  const b = await promis2()
  console.log(a,b)
}
add();