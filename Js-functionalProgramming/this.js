// ES5
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};


// ES6. What is the output ? Fix this code.
var obj = {
  name: 'gaurav',
  tasks: ['a', 'b', 'c'],
  counter: function counter() {
    console.log('this id ', this.id);  // this refers to the scope of the object in which it is called.
    setTimeout(function() {
      console.log('this in setTimeout ', this.id);
    }, 1000);

    var self = this;                // approach 1: Using self = this
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
      console.log(self.name + " wants to " + task);
    });

    // approach 2
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
      //console.log(self.name + " wants to " + task);
    }.bind(this));        // fixing with bind
  }
};

// When not to use arrow functions

// object methods
//

obj.counter();


var cat = {
  lives: 9,
  jumps: () => { console.log('this', this); return this.lives } // this refers to the lexical scope
}

console.log(' this in jumps', cat.jumps());
