/*
If you are used to writing procedural code in a language like Python, Java, or C++,
you would expect this code to print step1, step2, step3, and so on. Because Javascript
is non-blocking, this isn't what happens at all. The HTTP requests take time to execute,
and so the JS runtime moves the call to a queue and just keeps going. Once all of the calls on the
main portion of the call stack are complete, an event loop visits each of the completed request()s
in the order they completed and executes their callbacks.

 Starting demo
 Finished demo
 step3: UHub
 step2: CNN
 step1: KidPub

So what if we need to execute the requests in order, maybe to build up a result from each of them?
*/

// Asynchronous example //
var request = require('request');

var step1 = function (req1) {
    request(req1, function (err, resp) {
        console.log('step1: KidPub');
    });
};

var step2 = function (req2) {
    request(req2, function (err, resp) {
        console.log('step2: CNN');
    });
};

var step3 = function(req3) {
    request(req3, function (err, resp) {
        console.log('step3: UHub');
    });
};



// console.log('Starting demo');
// step1('http://www.kidpub.com');
// step2('http://www.cnn.com');
// step3('http://universalhub.com');
// console.log('Finished demo');


// Classic way to synchronize things in Javascript

// Synchronous example
var req1 = 'http://www.bu.edu';
var req2 = 'http://www.cnn.com';
var req3 = 'http://universalhub.com';

var step1 = function () {
    request(req1, function (err, resp) {
        console.log('step1: BU');
        request(req2, function (err, resp) {
            console.log('step2: CNN');
            request(req3, function(err, resp) {
                console.log('step3: UHub');
            })
        })
    });
};

console.log('Starting demo');
step1();
console.log('Finished demo');


/*
One way to avoid callback hell is to use thenables (pronounced THEN-ables),
which essentially implement the callback in a separate function, as described in the
Promise/A+ specification.
A Javascript Promise is a value that can be returned that will be filled in or
completed at some future time. Most libraries can be wrapped with a Promise interface,
and many implement Promises natively.
In the code here we're using the request-promise library, which wraps the standard HTTP
request library with a Promise interface. The result is code that is much easier to read...an
event happens, THEN another event happes, THEN another and so on.

This might seem like a perfectly reasonable approach, chaining together
calls to external APIs in order to build up a final result.
The problem here is that a Promise is returned by the rp() call in each step...we are
effectively nesting Promises. The code below appears to work, since
it prints the steps on the console in the correct order. However, what's
really happening is that each rp() does NOT complete before moving on to
its console.log(). If we move the console.log() statements inside the callback for
the rp() you'll see them complete out of order, as I've done in step 2. Uncomment the
console.log() and you'll see how it starts to unravel.
*/























