
// Thunk
function foo(x) {
  // inner function remembers x
  return function() {
    return x;
  }
}

// function foo() {
//   return 42;
// }

// function bar() {
//   return 10;
// }

function add(x, y) {
  return x + y;
}

function add2(fn1, fn2) {
  return add( fn1(), fn2() );
}
console.log('result', add2( foo(10), foo(42)));
