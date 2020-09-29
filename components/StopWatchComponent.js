// Develop a stopwatch component.
// Do not use setInterval

// Write tests for it
class StopWatch {
  constructor() {
    this._startTime = 0;
    this._lastPauseTime = 0;
    this._currentTime = 0;
    this._elapsedTime = 0;
  }

  start() {
    this._startTime = Date.now();
  }

  // pause the stop watch
  stop() {
    this._currentTime = Date.now();
    this._elapsedTime += (this._currentTime - this._startTime);
    this._startTime = this._currentTime;
  }

  getElapsedTime() {
    this._currentTime = Date.now();
    const offset = this._currentTime - this._startTime;
    this._elapsedTime += offset;
    this._startTime = this._currentTime;
    return this._elapsedTime / 1000;
  }

  reset() {
    this._elapsedTime = 0;
  }
}


// Helper Function sleep
// Promise resolves after given time period.


const sw = new StopWatch();
sw.start();
sleep(200).then(() => {
  console.log('elapsed time', sw.getElapsedTime());
}).then(() => {
  sw.stop();
}).then(() => {
  return sleep(400)
}).then(() => {
  console.log('elapsed time', sw.getElapsedTime());
}).then(() => {
  sw.reset();
}).then(() => {
  console.log('elapsed time', sw.getElapsedTime());
});


// sw.reset();
// sleep(0).then(() => {
//   console.log('elapsed time', sw.getElapsedTime());
// });



async function sleep(time) {
  const p = new Promise((resolve, reject) => setTimeout(() => resolve(), time));
  return p;
}




