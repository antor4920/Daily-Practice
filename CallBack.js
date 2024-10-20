const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched"); // Task completed successfully
  }, 2000);
});

fetchData.then((data) => {
  console.log(data); // Handle success
});
