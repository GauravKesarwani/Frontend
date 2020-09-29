// Promises

function foo() {
  console.log('foo');

  return new Promise(resolve => {
    console.log('foo timeout before');

    setTimeout(() => {
      console.log('foo timeout');

      resolve('foo resolved');
    }, 1000);

    console.log('foo timeout after');
  });
}

function bar() {
  console.log('bar');

  return new Promise(resolve => {
    console.log('bar timeout before');

    setTimeout(() => {
      console.log('bar timeout');

      resolve('bar resolved');
    }, 3000);

    console.log('bar timeout after');
  });
}

// 1
// foo()
//   .then(function(res) {
//     return bar();
//   });

// // 2
// foo()
//   .then(bar);

// // 3

// foo()
//   .then(bar())
//   .then(function(res) {
//     console.log('inside then 2: ' + res);
//   });

// // 4

foo()
  .then(function(res) {
    console.log('inside then 1: ' + res);
    bar();
  })
  .then(function(res) {
    console.log('inside then 2: ' + res);
  });
