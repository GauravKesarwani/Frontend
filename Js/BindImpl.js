// Implement bind


Function.prototype.bind = function(context) {
	var fn = this;
	let previousArgs = [].slice.call(arguments, 1);

   		return function() {
			let currentArgs = [].slice.call(arguments);
 			let combinedArgs = [].concat(previousArgs, currentArgs);
	
      	 	fn.apply(context, combinedArgs);
    	};
};


var boundFn = func.bind(this, args);