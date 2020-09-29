// Compose two math functions
// add and subtract take parameters

function compose(f, g, h) {
    const fns = [...arguments].reverse();

    return (...args) => {

        let result = args[0];
        for (let i = 0; i < fns.length; i++) {
            const fn = fns[i];
            result = fn(result);
        }
    
        return result;
    }
}


// Test compose

function add3(n) {
    return n + 3;
}

function mul5(n) {
    return n * 5;
}

function sub1(n) {
    return n - 1;
}

const composedFn = compose(add3, mul5, sub1);

console.log('result of fn composition', composedFn(4));
