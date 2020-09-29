function Promise(fn) {
    // takes a function as an argument that gets the fullfiller
    var callbacks = [], result;
    fn(function fulfill() {
        if (result) return;
        result = arguments;
        for (var c;c=callbacks.shift();)
            c.apply(null, arguments);
    });
    this.addCallback = function(c) {
        if (result)
            c.apply(null, result)
        else
            callbacks.push(c);
    }
}

Promise.prototype.then = function(fn) {
    var that = this;
    return new Promise(function(c){
        that.addCallback(function() {
            var result = fn.apply(null, arguments);
            if (result instanceof Promise)
                result.addCallback(c);
            else
                c(result);
        });
    });
};



var a1 = new Promise((resolve) => { var a; setTimeout(() => { return a = 10; resolve(10)}, 1000);  });
var a2 = new Promise(() => { setTimeout(() => {}, 2000) });
var a3 = new Promise(() => { setTimeout(() => {}, 3000) });

a1.then(function(res) {
    console.log(res);
    return a2;
}).then(function(res) {
    console.log(res);
    return a3;
}).then(() => console.log(res));