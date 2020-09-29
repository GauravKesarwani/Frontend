//The built-in function setTimeout uses callbacks.
//Create a promise-based alternative.

//That promise should resolve after ms milliseconds, so that we can add .then to it, like this:


function delay(ms) {
  // your code

  // do some operation like fetch from a backend. resolve when it is complete.
}

delay(3000).then(() => alert('runs after 3 seconds'));