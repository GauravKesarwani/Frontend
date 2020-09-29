// you have to know something to do something //


function taskA(done) {
  console.log('this', this);
  console.log('task A');
  console.log('done', done);
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


function executeInSeries(fnList) {
  const fn = fnList.shift();

  fn();

  executeInSeries

}

// function doCalls() {
//   return new Promise(function(resolve, reject) {
//     resolve(1);
//   })
//   .then(function (result) {
//     taskA(done)
//   })
//   .then(function () {
//     taskB(done);
//   })
//   .then(function () {
//     taskC(done);
//   })
//   .then(function () {
//     taskD(done)
//   });
// }

// const Async = function() {
//   this.queue = [];
// }

// Async.prototype.push = function(task) {
//   this.queue.push(task);
// }

// Async.prototype.next = function() {
//   this.queue.shift();
//   //console.log(this.queue[0]);
//   return this.queue[0];
// }

// Async.prototype.invoke = function(task) {
//   this.queue.shift
//   task.apply(this, this.next());
// }



// taskA(done);
// taskB(done);
// taskC(done);
// taskD(done);

// doCalls();

const series = new Async();
series.push(taskA);
series.push(taskB);
series.push(taskC);
series.push(taskD);

series.invoke(taskA)

