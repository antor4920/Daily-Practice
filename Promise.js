const Firstpromise = new Promise(function (reject, mresolve) {
  reject("I am rejected");
  mresolve("I am resolve");
});

Firstpromise.then(
  (res) => {
    console.log(res);
  },
  (req) => {
    console.log(req);
  }
);
