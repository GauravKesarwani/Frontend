//Async method
function doSomething(callback) {
  var value = 42;
  callback(value);
}


//Promise based implementation

function doSomething() {
  return {
    then: function(callback) {
      var value = 42;
      callback(value);
    }
  };
}