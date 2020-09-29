//PROBLEM STATEMENT
// write a function hof that accepts a function f and a positive integer t
// it should return some function rf that when called executes f after t ms
// with the behavior such that subsequent calls to rf will not cause an execution
// of f until after t ms have elapsed from the first call.






function hof(f, t) {
  let timerId;

  return function(person) {

    const self = this;

    if (!timerId) {
          timerId = setTimeout(() => { f(); timerId=null; }, t);
    }


  }
}





// TEST CODE

var testF = function(person) { console.log("Hello " + person) ; };
var rf = hof(testF, 250);

rf("Sakib"); // RESULTS IN A CALL at 250
rf("bob"); rf("rob");  // suppressed
setTimeout(() => {rf("tristan")}, 200); // suppressed
setTimeout(rf, 600); //RESULTS IN A CALL at 850

var tracker = function() { console.log("100ms elapsed")};
var interval = setInterval(tracker, 100);
setTimeout(function(){ clearInterval(interval);}, 1000);

/*
100ms elapsed
100ms elapsed
f ran!
100ms elapsed
100ms elapsed
100ms elapsed
100ms elapsed
100ms elapsed
100ms elapsed
f ran!
100ms elapsed



*/
