Array.prototype.map = function(fn) {
  var result = [];
  var self = this;
  this.forEach(function(item) {
    result.push(fn.call(self, item));
  });
  return result;
}


var arr = [ 1, 2, 3];

console.log('result', arr.map(function(item) { return item * 2; }));
