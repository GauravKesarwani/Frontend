// faking a promise. Approach 1 to implement a promise

function doLongRunningTask() {
  var promise = new MyPromise();
  setTimeout(function () {
     promise.resolve("I am done.");
  }, 3000);
  return promise;
}


var response = doLongRunningTask();

// We can subscribe as many times as required using the "then" method.
response.then(function (result) {
  console.log("RECD: 1", result);
})
.then(function (result) {
  console.log("RECD: 2", result);
})
.catch(function (e) {
  console.log("ERROR CB: ", e);
});


/**
The then() method takes a callback and stores it in the callbacks array.
But we have to handle the case where, by the time then()
method is called, the promise may already be resolved.
In that case, we directly invoke the callback and pass in the "data".  This data
is made available from the resolve function().
**/
MyPromise.prototype.then = function (callback) {
  if (this.resolved) {              // If the promise is already resolved, invoke the callback with the data.
    callback(this.data);
  } else {
    this.callbacks.push(callback);  // Store the callback in the array
  }
  return this;       // Return "this" to enable chaining
};


/**
The resolve() method has the data as input, which will be passed by the client code.  First it
sets the resolved property to true, stores the data for future use.
Then it loops through all callbacks and invoke the callback with the data.
**/
MyPromise.prototype.resolve = function (data) {
  this.resolved = true;                        // Set resolved to true
  this.data = data;                            // Store the data, so that this can be used in the then() method
  this.callbacks.forEach(function (callback) { // Loop through all registered callbacks and
    callback (data);                            // Invoke the callback with the data
  })
}
