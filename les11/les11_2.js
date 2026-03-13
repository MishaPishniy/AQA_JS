//Callback
setTimeout(() => {
  console.log("Я виконався пізніше");
}, 1000);

//Мінус callback
loginUser(user, () => {
  getProfile(() => {
    getPosts(() => {
      console.log("Все отримали");
    });
  });
});