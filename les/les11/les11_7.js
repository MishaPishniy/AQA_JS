//fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  //POST-запит через fetch
  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Мій пост",
    body: "Текст поста",
    userId: 1
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

  //Обробка помилок
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Помилка запиту");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Сталася помилка:", error);
  });


  //ЗАБУЛИ json
//fetch
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
    console.log(response);
  });