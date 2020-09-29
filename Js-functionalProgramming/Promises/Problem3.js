// Qs: Write a function which returns a promise which resolves after 3000 ms.

const wait = time => new Promise((resolve) => setTimeout(resolve, time));