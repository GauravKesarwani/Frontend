function add(num1, num2) {
  return num1 + num2;
}

var boundFn = add.bind(context, arg1, arg2);
boundFn(num3, num4);


// bind Implementation

function bind(context) {
  var fn = this;
  var prevArgs = [].slice.call(arguments, 1);
  return function() {
    var currentArgs = [].slice.call(arguments);
    var combinedArgs = [].concat(prevArgs, currentArgs);
    return fn.apply(context, combinedArgs);
  }
}


add.call(context, arg1, arg2);

function call(context) {
  context.fn = this;
  context.fn()
}
