// Let's create an object o from function f with its own properties a and b:
let f = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new f(); // {a: 1, b: 2}
 
 // add properties in f function's prototype
 f.prototype.b = 3;
 f.prototype.c = 4;

 // o.__proto__ has properties b and c
 // o.__proto.__.__proto.__ is Object.prototype

 // What will be the value of 

 console.log(o.a); // 1


console.log(o.b); // 2  // Property shadowing
console.log(o.c); // 4

console.log(o.d); // undefined