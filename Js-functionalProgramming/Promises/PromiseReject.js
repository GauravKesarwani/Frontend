Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .then( () => { 
    console.log( 'Not called.' );
  }, error => {
    console.error( 'onRejected function called: ' + error.message );
  });

// Qs 2

  Promise.reject()
  .then( () => 99, () => 42 ) // onRejected returns 42 which is wrapped in a resolving Promise
  .then( solution => console.log( 'Resolved with ' + solution ) ); // Resolved with 42


// Qs 3
  Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .catch( error => {
    console.error( 'onRejected function called: ' + error.message );
  })
  .then( () => {
    console.log( "I am always called even if the prior then's promise rejects" );
  });