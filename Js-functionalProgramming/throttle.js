// Incorrect implementation

// function throttle(fn, delay) {
// 	let inThrottle;
// 	return function () {
// 		var args = [].slice.call(arguments);
// 		if (!inThrottle) {
// 			fn.apply(this, args);
// 			inThrottle = true
// 			setTimeout(() => { inThrottle = false; }, delay);
// 		}
// 	}
// }

// Solution: My Implementation 
function throttle(fn, limit) {
  let lastFnCallTime;
  let lastFuncTimer;
  return function() {
    const args = [].slice.call(arguments);
    if (
      !lastFnCallTime ||
      (lastFnCallTime && Date.now() - lastFnCallTime > limit)
    ) {
      fn.apply(this, args);
      lastFnCallTime = Date.now();
      return;
    } else if (Date.now() - lastFnCallTime < limit) {
      clearTimeout(lastFuncTimer);
      lastFuncTimer = setTimeout(() => {
        fn.apply(this, args);
        lastFnCallTime = Date.now();
      }, limit - (Date.now() - lastFnCallTime));
    }
  };
}

function sayHello(x) {
  console.log(x)
}

// Correct implementation. fixes the last run. The above solution can br refactored to this one.
const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
    	console.log('last ran', lastRan);
      func.apply(context, args)
      lastRan = Date.now()
    } else {

      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
      	console.log('last ran', lastRan);
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}


var throttledFn = throttle(sayHello, 3000);

throttledFn(1);
throttledFn(2);
throttledFn(3);

setTimeout(() => { throttledFn(4); }, 3000);

// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf