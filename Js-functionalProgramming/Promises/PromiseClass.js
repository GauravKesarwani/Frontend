// Q. What will be the output of this program

class MyPromise {
  constructor(executor) {
    this.callbacks = [];

    const resolve = res => {
      for (const { callback } of this.callbacks) {
        callback(res);
      }
    };

    executor(resolve);
  }

  then(callback) {
    const p = new MyPromise((resolve) => {
      // done: we create a new function which will call the current callback & 
      // resolve this promise with the value returned from the current callback; 
      // so basically we are resolving this promise with the value returned from the first callback.	
      const done = res => {
        resolve(callback(res));
      };
      this.callbacks.push({ callback: done });
    });

    return p;
  }
}

promise = new MyPromise((resolve) => {
  setTimeout(() => { 
  	
  	resolve(2) 
  }, 4000);
});

const secondPromise = promise.then(result => {
	// this is your callback. Callback returns a value. We need to wrap this value in a promise.

  	console.log(result);
  	return 2 * result;
})

secondPromise.then((result) => {
	//console.log('list of callbacks - 2', this.callbacks[0].callback.toString());
	console.log(result)
});

// console.log('list of callbacks', promise.callbacks[0].callback.toString());
// console.log('list of callbacks', secondPromise.callbacks[0].callback.toString());
// console.log('list of callbacks', promise.callbacks[0].callback === secondPromise.callbacks[0].callback);
// console.log('list of callbacks', promise.callbacks[0].callback === promise.callbacks[0].callback);