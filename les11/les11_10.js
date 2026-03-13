//then async
getUser()
  .then((user) => getOrders(user))
  .then((orders) => {
    console.log(orders);
  })
  .catch((error) => {
    console.log(error);
  });

  async function showOrders() {
  try {
    const user = await getUser();
    const orders = await getOrders(user);
    console.log(orders);
  } catch (error) {
    console.log(error);
  }
}