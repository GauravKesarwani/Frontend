// Question 7 - What is the output of the program ?

// Last practiced - March, 7th, 2019

/* Place the following code onto the board, ask the candidate the following questions */
// Also find out about the reason why a particular method works and why it does not.

// why the third one will throw error.


var Foo = function( a ) {
  function bar() {
    return a;
  }
  this.baz = function() {
    return a;
  };
};


Foo.prototype = {
  biz: function() {
    return a;
  }
};


var f = new Foo( 8 );
f.bar();
f.baz();
f.biz();
