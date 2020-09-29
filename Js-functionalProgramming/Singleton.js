'use strict';

const Singleton = (function() {
  let instance;

  function createInstance() {
    instance = new Object();
    return instance;
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  }

})();
