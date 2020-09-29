
// ES6 promises
asyncfn1().then(() => asyncfn2()).then(() => asyncfn3()).then(() => done());


// ES6 Arrow functions
//Simplifying the arrow function: If the arrow function contains only a single return statement,
// it can be replaced with an object expression.

let nextTodoId = 0;
export const addTodo = (text) => {
     return {
         type: ‘ADD_TODO’,
         id: (nextTodoId++).toString(),
         text,
    }
}

export const addTodo = (text) => ({
    type: ‘ADD_TODO’,
    id: (nextTodoId++).toString(),
    text,
});


// ES6 default values

function add(x=5, y=7) {
  console.log(x+y);
}
add(); // => 12


// ES6 Array destructuring
// Every additional comma added will represent the next item in the array.
var [firstItem,,,,fifthItem] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem) // => Carrots
console.log(fifthItem) // => Papaya



// ES6 object destructuring
var {cost, title, type} = {
  cost: 3.99,
  title: 'Ice Cream Flavors',
  type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
}

// VOILA!
console.log(cost, title, type[2])

// Default params and destructuring
function profilePage({favColor: favColor} = {favColor: 'vintage pink'}, [name, age] = ['Bunny', 24]) {
  console.log(`My name is ${name}. I am ${age} years old and my favorite color is ${favColor}!`)
}

profilePage();
// => My name is Bunny. I am 24 years old and my favorite color is vintage pink!
profilePage({favColor: 'blue'}, ['Ed', 30])


// ES6 new repeat method
'Bunny'.repeat(3)






// Classes ES5 vs ES6 code

function Bunny(name, age, favoriteFood) {
  this.name = name;
  this.age = age;
  this.favoriteFood = favoriteFood;
}

Bunny.prototype.eatFavFood = function () {
  console.log('\"Mmmm! Those ' + this.favoriteFood + ' were delicious\", said ' + this.name + ', the ' + this.age + ' year old bunny.');
};

var newBunny = new Bunny('Brigadier Fluffkins', 3, 'Raspberry Leaves');
newBunny.eatFavFood();

class Bunny {
  constructor(name, age, favoriteFood){
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
  }

  eatFavFood() {
    console.log(`"Mmmm! Those ${this.favoriteFood} were delicious", said ${this.name} the ${this.age} year old bunny.`);
  };
}

let es6Bunny = new Bunny('Brigadier Fluffkins', 3, 'Raspberry Leaves');
es6Bunny.eatFavFood();

// typeof Bunny.  // returns function.



// ES6 Inheritance
class Bunny {
  constructor(name, age, favoriteFood){
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
  }

  eatFavFood() {
    console.log(`"Mmmm! That ${this.favoriteFood} was delicious", said ${this.name} the ${this.age} year old bunny.`);
  };
}

class BelgianHare extends Bunny {
  constructor(favDrink, favoriteFood, name, age) {
    super(name, age, favoriteFood);
    this.favDrink = favDrink;
  }

  drinkFavDrink() {
    console.log(`\"Thank you for the ${this.favDrink} and ${this.favoriteFood}!\", said ${this.name} the happy ${this.age} year old Belgian Hare bunny.`)
  }
}

let newBelgHare = new BelgianHare('Water', 'Grass', 'Donald', 5);
newBelgHare.drinkFavDrink();
// "Thank you for the Water and Grass!", said Donald the happy 5 year old Belgian Hare bunny.
newBelgHare.eatFavFood();


// String templates
// #1
// Before:
function sayHi(petSquirrelName) { console.log('Greetings ' + petSquirrelName + '!'); }
sayHi('Brigadier Sir Nutkins II'); // => Greetings Brigadier Sir Nutkins II!

// After:
function sayHi(petSquirrelName) { console.log(`Greetings ${petSquirrelName}!`); }
sayHi('Brigadier Sir Nutkins II'); // => Greetings Brigadier Sir Nutkins II!


// #2
// Before:
console.log('first text string \n' + 'second text string');
// => first text string
// => second text string

// After:
console.log(`first text string
second text string`);
// => first text string
// => second text string


// #3
// Before:
var num1 = 5;
var num2 = 10;
console.log('She is ' + (num1 + num2) +  ' years old and\nnot ' + (2 * num1 + num2) + '.');
// => She is 15 years old and
// => not 20.

// After
var num1 = 5;
var num2 = 10;
console.log(`She is ${num1 + num2} years old and\nnot ${2 * num1 + num2}.`);
// => She is 15 years old and
// => not 20.


// Spread operators


var squirrelNames = ['Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom'];
var bunnyNames = ['Lady FluffButt', 'Brigadier Giant'];
var animalNames = ['Lady Butt', squirrelNames, 'Juicy Biscuiteer', bunnyNames];

animalNames;
// => ['Lady Butt', ['Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom'], 'Juicy Biscuiteer', ['Lady FluffButt', 'Brigadier Giant']]

// To flatten this array we need another step:
var flattened = [].concat.apply([], animalNames);
flattened;

var squirrelNames = ['Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom'];
var bunnyNames = ['Lady FluffButt', 'Brigadier Giant'];
var animalNames = ['Lady Butt', ...squirrelNames, 'Juicy Biscuiteer', ...bunnyNames];


var values = [25, 50, 75, 100]
// This:
console.log(Math.max(25, 50, 75, 100)); // => 100

// Is the same as this:
console.log(Math.max(...values)); // => 100



function myFunction(x, y, z) {
  console.log(x + y + z)
};
var args = [0, 1, 2];
myFunction.apply(null, args);



// After
function myFunction(x, y, z) {
  console.log(x + y + z);
}
var args = [0, 1, 2];
myFunction(...args);



// Generators

function* callMe() {
  yield '1';
  yield '…and a 2';
  yield '…and a 3';
  return;
  yield 'this won’t print';
}

var anAction = callMe();

console.log(anAction.next());
//=> { value: ‘1’, done: false }

console.log(anAction.next());
//=> { value: ‘…and a 2’, done: false }

console.log(anAction.next());
//=> { value: ‘…and a 3’, done: false }

console.log(anAction.next());
//=> { value: ‘undefined’, done: true }

console.log(anAction.next());
//=> { value: ‘undefined’, done: true }

