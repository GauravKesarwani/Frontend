var a = {a: 1};

var b = Object.create(a); 

console.log(a.a);  
console.log(b.a);
b.a=5;
console.log(a.a); 
console.log(b.a); 
delete b.a;
console.log(a.a);
console.log(b.a); 
delete a.a;
console.log(a.a); 
console.log(b.a); 