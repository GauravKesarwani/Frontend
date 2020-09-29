'use strict';

function asyncFn(callback) {
  const a = 42;   // some async operation
  callback(a);
}

// asyncFn((result) => console.log('result', result));

// here we are passing the callback method to the then
// => asyncFn().then((result ) => console.log('result', result));



/* Promise implementation 1 */

var p = new Promise(function(resolve, reject) {
  var a = 42;
  resolve(42);
});

p.then(function(result) {});

function Promise(fn) {
  let state = 'PENDING';
  let value;
  var deferred = null;

  function resolve(result) {
    if (state === 'RESOLVED') {
      return;
    } else if (state === 'PENDING') {
      state = 'RESOLVED';
      value = result;
      handleDeferred(deferred);
    }
  }

  function handleDeferred(deferred) {
    if (!deferred) {
      return;
    } else {
      deferred(value);
    }
  }
  this.then = function(cb) {
    if (state === 'PENDING') {
      deferred = cb;
      return;
    }
  }

  fn(resolve);
}





























/* A promise is an object */
function Promise(fn) {
  const PENDING = 1;
  const FULFILLED = 2;
  const REJECTED = 3;

  let state = PENDING;
  //this.callback = null;
  let deferred;
  let result;

  function resolve(newResult) {
    state = FULFILLED;
    result = newResult;

    if (deferred) {
      handle(deferred);
    }
  }

  this.then = function(onResolved) {
    handle(onResolved);
  }

  function handle(onResolved) {
    if (state === 'Pending') {
      deferred = onResolved;
      return;
    }
    onResolved(result);
  }



  function reject() {}

  fn(resolve, reject);
}

const p = new Promise(function(resolve, reject) {
  let a = 42;
  resolve(a);
});

p.then((result) => console.log('result', result));
