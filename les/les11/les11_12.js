function getData() {
  return new Promise((resolve, reject) => {
    const success = false;

    if (success) {
      resolve("Дані отримані");
    } else {
      reject("Помилка сервера");
    }
  });
}

async function run() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log("Сталася помилка:", error);
  }
}

run();