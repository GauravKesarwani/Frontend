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
    return new MyPromise((resolve) => {
      const done = res => {
        resolve(callback(res));
      };
      this.callbacks.push({ callback: done });
    });
  }
}


promise = new MyPromise((resolve) => {
  setTimeout(() => resolve(2), 1000);
});

promise.then(result => {
  console.log(result);
  return 2 * result;
}).then(result => console.log(result));