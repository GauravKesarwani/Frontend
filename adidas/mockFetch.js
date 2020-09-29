  mockFetch: function (path, mockData) {
    return browser.driver.executeScript(function (_path, _mockData) {
      // We cache /metrics and /comparisonSet to prevent new fetch calls. If we want
       // the mocked data to return, we need to invalidate the cache, so fetch is run again
       sessionStorage.clear();
 
       const origFetch = window.fetch;
       window.sinon.stub(window, 'fetch', function (address) {
         if (address.indexOf(_path) > -1) {
           return new Promise(function (resolve) {
             return resolve({
               json: function () {
                 return new Promise(function (jsonResolve) {
                   jsonResolve(_mockData);
                 });
               }
             });
           });
         }
         return origFetch.apply(window, arguments);
       });
     }, path, mockData);
   },

    mockMultipleFetch: function (mocks) {
    return browser.driver.executeScript(function (_mocks) {
      // Clear cache to force cached apis to run again
      sessionStorage.clear();
       const origFetch = window.fetch;
      window.sinon.stub(window, 'fetch', function (address, options) {
        let matchedAddressIndex = -1;
        for (let i = 0; i < _mocks.length; i++) {
          if (address.indexOf(_mocks[i].address) > -1 &&
            _mocks[i].method === options.method.toLowerCase()) {
            matchedAddressIndex = i;
            break;
          }
        }
         if (matchedAddressIndex > -1) {
          return new Promise(function (resolve) {
            return resolve({
              json: function () {
                return new Promise(function (jsonResolve) {
                  jsonResolve(_mocks[matchedAddressIndex].mock);
                });
              }
            });
          });
        }
        return origFetch.apply(window, arguments);
      });
    }, mocks);
  },