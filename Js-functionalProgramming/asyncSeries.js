function taskA(done) {
  console.log('task A');
  done();
}

function taskB(done) {
  setTimeout(function() {
    console.log('task B');
    done();
  }, 2000);
}

function taskC(done) {
  setTimeout(function() {
    console.log('task C');
    done();
  }, 200);
}

function taskD(done) {
  console.log('task D');
  done();
}


function async_series(fn_list) {
  if (fn_list.length) {
    const fn = fn_list.shift();

    const callback = function () {
      async_series(fn_list);
    };

    fn(callback);
  }
}

const taskList = [];

taskList.push(taskA);
taskList.push(taskB);
taskList.push(taskC);
taskList.push(taskD);

async_series(taskList)
