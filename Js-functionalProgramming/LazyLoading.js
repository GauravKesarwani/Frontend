// Make a link alert "hello world". You can assume you already have a reference to the link DOM node.

var link = document.getElementById('my-link'); // anchor element
link.addEventListener('click', function(e) { alert('Hello world') }, false);


// Solve browser compatibility issues.
// In IE (prior to IE9), addEventListener was not supported. Instead you would have to use attachEvent.

// Abstracted cross browser event listener
function addListener(target, eventType, handler) {
  if (target.addEventListener) {
    target.addEventListener(eventType, handler, false);
  } else if (target.attachEvent) {
    target.attachEvent('on'+ eventType, handler);
  }
}

// Performance Optimizations
// Lazy loading technique: Simple. isn’t it.
// The function will not run unless addListener is called for the first time.
// Then it assigns the new version of function to it.

function addListener(target, eventType, handler) {
  let addListener;
  if (target.addEventListener) {
    addListener = function(target, eventType, handler) {
      target.addEventListener(eventType, handler, false);
    }
  }  else if (target.attachEvent) {
    addListener = function(target, eventType, handler) {
      target.attachEvent('on'+ eventType, handler);
    }
  }

  addListener(target, eventType, handler);
}

// Advanced loading technique

var addListener;
if (target.addEventListener) {
  addListener = function(target, eventType, handler) {
    target.addEventListener(eventType, handler, false);
  };
} else if (target.attachEvent) {
  addListener = function(target, eventType, handler) {
    target.attachEvent('on'+eventType, handler);
  };
} else {
  addListener = function() {
   return false;
  };
}


// Question: how would you decide when to use lazy loading vs advanced loading?


// Look for: Lazy loading is good when you aren't calling function right away after loading the page.
// Advanced loading is better when you want to call the function right away, and you will be calling it many times.


// Lazy, or "on demand", loading is a great way to optimize your site or application.
// This practice essentially involves splitting your code at logical breakpoints,
// and then loading it once the user has done something that requires, or will require, a new block of code.
// This speeds up the initial load of the application and lightens its overall weight as some blocks may never even be
// loaded.
