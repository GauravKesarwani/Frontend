//const p = Promise.all([p1, p2, p3, p4]);

function newPromiseAll(promises) {
    const result = [];
    
    return new Promise((resolve, reject) => {
        promises.reduce((acc, promise, idx) => acc.then((r) => {
            result.push(r);
            if (idx === promises.length - 1) {
                promise.then(r => {
                    result.push(r)
                    resolve(result);
                });
            } else {
                return promise;
            }
        }));
    });
};

// utility function to create a promise
function createPromise(id, delay) {
    // create a promise
    //const p = fetch(url);

    return new Promise((resolve, reject) => {
        // simulate an async operation such as network call
        setTimeout(() => {
            //console.log('done');
            resolve('done ' + id);
        }, delay);
    });
}

const p1 = createPromise(1, 3000);
const p2 = createPromise(2, 5000);
const p3 = createPromise(3, 4000);
const p4 = createPromise(4, 6000);

const starttime = Date.now();
const pAll = newPromiseAll([p1, p2, p3, p4]);
pAll.then(result => {
    console.log(result)
    const diff = Date.now() - starttime;
    console.log('diff', diff / 1000);
});