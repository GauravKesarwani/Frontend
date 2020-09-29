// 1. Outer lexical environment example.

function b() {
  console.log(myvar);
}

function a() {
  var myvar = 2;
  b();
}

var myvar = 1;
a();


// 2. Scope example What is o/p of ?

function b() {
var myvar;
console.log(myvar);
}

function a() {
var myvar = 2;
console.log(myvar);
b();
}

var myvar = 1;
console.log(myvar);
a();
console.log(myvar);
