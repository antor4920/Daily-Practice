function hello(name, callFun) {
  setTimeout(() => {
    console.log("My name is " + name);
    callFun && callFun();
  }, 3000);
}

hello("Antor", () => {
  hello("Ashik", () => {
    hello("Jihad");
  });
});
