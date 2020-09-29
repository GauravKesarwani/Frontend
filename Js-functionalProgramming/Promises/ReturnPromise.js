// If onFulfilled returns a promise, the return value of then will be resolved/rejected by the promise.

//returns another pending promise object, the resolution/rejection of the promise returned by then 
// will be subsequent to the resolution/rejection of the promise returned by the handler. 
// Also, the value of the promise returned by then will be the same as the value of the promise
// returned by the handler.

function resolveLater(resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function () {
    reject(new Error('Error'));
  }, 1000);
}

var p1 = Promise.resolve('foo');
var p2 = p1.then(function() {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(function(v) {
  console.log('resolved', v);  // "resolved", 10
}, function(e) {
  // not called
  console.log('rejected', e);
});

var p3 = p1.then(function() {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(function(v) {
  // not called
  console.log('resolved', v);
}, function(e) {
  console.log('rejected', e); // "rejected", 'Error'
});