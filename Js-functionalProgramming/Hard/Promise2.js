'use strict';

// function asyncFn(callback) {
//   console.log(42);
//   callback(42);
// }

// function asyncFn() {
//   console.log(42);
//   return {
//     then: function(cb) {
//       cb(42);
//     }
//   }
// }

// async.then(function(res) {});

// executor fn executes immediately.
// Promises have states.
// Promise is a function constructor.

// error callback is not a function.

function Promise(fn) {
  let state = 'Pending';
  let result;
  let callback = null;

  function resolve(value) {
    state = 'Resolved';

    result = 42;
    callback(value);
  }

  this.then = function(cb) {
    callback = cb;
  }

  fn(resolve);
}

const p = new Promise(function(resolve) { resolve(43) });
p.then(function(result){ console.log(result) });


function Promise2(fn) {
  let state = 'Pending';
  let result;
  let callback = null;

  function resolve(value) {
    state = 'Resolved';
    result = 42;

    if (callback) {
      handle(callback);
    }
  }

  function handle(cb) {
    if (state === 'Pending') {
      callback = cb;
      return;
    }

    callback(result);
  }

  this.then = function(cb) {
    handle(cb);
  }

  fn(resolve);
}





