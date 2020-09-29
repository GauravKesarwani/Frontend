class MyPromise {
    constructor(resolver) {
        this.resolver = resolver;
    }

    then(callback) {
        const result = new MyPromise(callback);
        this.resolver(callback);

        return result;
    }
}

promise = new MyPromise((result) => { setTimeout(result, 500, 2); });

promise.then(result => {
    console.log(result);
    return 2 * result;
}).then(result => console.log(result));



// Aaa = function(f, pause) { 
//     console.log("ggg");
//     var t = this;
//     this.f = f;
//     this.thens = [];

//     this.resolve=function(g) {
//         for(var i = 0; i < t.thens.length; i++)
//         {
//             // try/catch to be used later for dealing with exceptions
//             try
//             {
//                 t.thens[i].f(g);
//                 t.thens[i].resolve();
//             }   
//             catch(ex)
//             {}

//         }
//     };  

//     // to be implemented later
//     this.reject=function(g) {};

//     this.then=function(resolve,reject) {
//         // i'm passing true for pause argument as we dont need to execute promise code just yet
//         var nextPromise = new Aaa(resolve,true);
//         this.thens.push(nextPromise);
//         return nextPromise;
//     }

//     if(!pause)
//         this.f(this.resolve,this.reject); 

// }


// var aaa = new Aaa(function(resolve,reject) {
//     console.log("aaa");
//     setTimeout(function() {
//         console.log("fff");
//         resolve("good");

//     },2000);
//     console.log("bbb");
// });


// aaa.then(function(res) {
//     console.log("ccc");
//     console.log(res);

// })
// .then(function(res) {
//     console.log("ddd");
//     console.log(res);
// },function(rej) {
//     console.log("eee");
//     console.log(rej);
// });