
// Qs 1
const s = new Date().getSeconds();
// The function setTimeout is called with 2 arguments: a message to add to the queue, and a time value 
// (optional; defaults to 0). The time value represents the (minimum) delay after which the message
// will actually be pushed into the queue. If there is no other message in the queue, the message is 
// processed right after the delay; however, if there are messages, the setTimeout message will have to 
// wait for other messages to be processed. For that reason, the second argument indicates a minimum time 
// and not a guaranteed time.


setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}

// Qs 2

(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('Callback 1: this is a msg from call back');
  });

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();