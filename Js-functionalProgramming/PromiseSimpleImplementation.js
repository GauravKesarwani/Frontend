// 1. Order in which resolve and then are called should not matter.
// 2. Multiple calls to then before resolve is called should register all the subscribers


function MyPromise(fn) {
    let state = 'PENDING';
    let result = null;
    let callback = null;

    function resolve(value) {
        if (state === 'PENDING') {
            result = value;
            state = 'RESOLVED';
        }

        if (callback) {
            callback(result);
        }
    }

    // if then is called after resolve is called ?
    this.then = function (cb) {
        if (state === 'PENDING') {
            callback = cb;
            return;
        } else if (state === 'RESOLVED') {
            callback(result);
        }
    }

    fn(resolve);
}

// 3. then should return a promise. Promise chaining.
// 4. Return value of the first handler is used to resolve the second promise.
function MyPromise(fn) {
    let state = 'PENDING';
    let result = null;
    let handlers = null;

    function resolve(value) {
        if (state === 'PENDING') {
            result = value;
            state = 'RESOLVED';
        }

        if (callback) {
            callback(result);
        }
    }

    function reject(reason) {
        if (state === 'PENDING') {
            result = reason;
            state = 'REJECTED';
        }
    }

    // if then is called after resolve is called ?
    this.then = function (onResolved, onRejected) {
        return new MyPromise(function (resolve, reject) {
            if (state === 'PENDING') {
                handler = { onResolved, onRejected };
                return;
            } else if (state === 'RESOLVED') {
                if (!handler.onResolved) {
                    resolve(result);
                } else {
                    resolve(handler.onResolved(result));
                }
            } else if (state === 'REJECTED') {
                if (!handler.onRejected) {
                    reject(result)
                } else {
                    reject(handler.onRejected(result));
                }
            }
        });

    }

    fn(resolve);
}

//5. What if the returned value is a promise. ? The resolve method should handle that.


const p = new MyPromise(function (resolve, reject) {
    // some xhr operation

    setTimeout(() => {
        resolve(30);
    }, 2000);
});


p.then(function (val) {
    console.log('Got value --', val);
});


p.then(function (val) {
    console.log(val);
});
