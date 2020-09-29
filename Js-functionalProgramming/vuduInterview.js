const o = {
  p: 1,
  f: function() {
    console.log(this.p);
  }
};

o.f();

var f = o.f;

f.apply(o);

var boundF = f.bind(o);
boundF();

call


class C extens Component {
    constructor() {
       this.a = 1;
       this.onClick = this.onClick.bind(this);
    }
    onClick () {
       console.log(param);
    }
    componentDidMount() {

    }

    render() {

       return <button onClick={this.onClick}/>
    }
}


const p1 = new Person("Bob");
const p2 = new Person("Alice");

Person.prototype.printHello = function() {
    console.log('Hi ' + this.name);
}

console.log(p1.name); // Bob
console.log(p2.name); // Alice


p1.printHello(); // Hi Bob
p2.printHello(); // Hi Alice


Http GET

//

GET gogole.com HTTP
Origin: sdfsd


//

POST https://xyz.com/products HTTP/1.1
content-type: application/json
origin: sdfs

const promise = fetch(url);

function request(arg, doneFn) {
    setTimeout(doneFn, 100);
}

parallel([10, 4, 'a'], request, () => { console.log('completed') });


// Write code for parallel calls and print completed when all calls are done.
function parallel(args, fn, doneFn) {
    let c = 0
    args.forEach(el => {
        fn(el,() => {
           c++;
           if (c === args.length) {
               doneFn();
           }
        });
    });

}


















