// the wrong way

// function debounce(func, wait) {
//   let timeout
//   return (...args) => {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func(...args), wait)
//   }
// }

function sayHello(x) {
  console.log(x)
}

const debouncedSayHello = debounce(sayHello, 3000)
debouncedSayHello(1)
debouncedSayHello(2)
debouncedSayHello(3)


function debounce(func, wait) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// const debouncedSayHello = debounce(sayHello, 3000)
// debouncedSayHello(1)
// debouncedSayHello(2)
// debouncedSayHello(3)


// Why do we need clearTimeout here ? 
// clearTimeout clears the callback fn which has been pushed to
// event queue using setTimeout.


// Follow up Question. What will be the output of the following program ?

// function debounce(func, wait) {
//   let timeout
//   return function(...args) {
//     timeout = null;
//     timeout = setTimeout(() => func.apply(this, args), wait)
//   }
// }

// const debouncedSayHello = debounce(sayHello, 3000)
// debouncedSayHello(1)
// debouncedSayHello(2)
// debouncedSayHello(3)


// https://www.withexample.com/javascript-interview-questions-debounce-function/