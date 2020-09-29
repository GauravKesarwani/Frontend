let taskId = 0;
function createAsync() {

    return asyncFn = (callback) => {
        const rand = Math.random() * 10;
        setTimeout(() => { ++taskId; callback(taskId); }, 1000);
    }
}

// Parallel can be done with a for loop
// How about series ?

function asyncSeries(tasks, resultCallback) {
    let firstTask = tasks[0];
    let taskIdx = 0;

    let callback = (value, error) => {
        console.log(value);

        if (!error) {
            const nextTask = tasks[++taskIdx];
            if (nextTask) { nextTask(callback); }
        }
    }

    firstTask(callback);
}

const taskList = [
    createAsync(),
    createAsync(),
    createAsync(),
    createAsync(),
    createAsync(),
];

asyncSeries(taskList, (result) => {
    console.log('got the result', result);
});