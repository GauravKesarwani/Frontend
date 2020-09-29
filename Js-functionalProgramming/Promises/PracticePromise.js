var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise() {
  	// store state which can be PENDING, FULFILLED or REJECTED
  	var state = PENDING;

		// store value once FULFILLED or REJECTED
		var value = null; 

  	// store sucess & failure handlers
  	var handlers = [];

	  function fulfill(result) {
	    state = FULFILLED;
	    value = result;
	  }

	  function reject(error) {
	    state = REJECTED;
	    value = error;
	  }

	  function resolve(result) {
	    try {
	      var then = getThen(result);
	      if (then) {
	        doResolve(then.bind(result), resolve, reject)
	        return
	      }
	      fulfill(result);
	    } catch (e) {
	      reject(e);
	    }
	  }
}