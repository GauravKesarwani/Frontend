let taskId = 0;
function createAsync() {
  return asyncFn = (callback) => {
    const rand = Math.random() * 10;
    setTimeout(() => { ++taskId; callback(taskId); }, 1000);
  }
}

function asyncSeries(taskList, callback) {
  let result = [];
  let tasksCompleted = 0;
  taskList.reduce((accum, current) => {
    return accum.then(someValue => {
      return new Promise((resolve, reject) => {
        current((value) => {
          result.push(value);
         
          tasksCompleted++;
          console.log('result tasks', result, tasksCompleted);
          if (tasksCompleted === taskList.length) {
            callback(result);
          } else {
            resolve(value);
          }
        });
      });
    });
  },
    Promise.resolve());
}

const taskList = [
  createAsync(),
  createAsync(),
  createAsync(),
  createAsync(),
  createAsync(),
];

asyncSeries(taskList, (result) => console.log(result));