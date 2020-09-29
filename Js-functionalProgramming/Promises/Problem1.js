// What is the output of ?

let promise = new Promise(function(resolve) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(result => console.log(result));