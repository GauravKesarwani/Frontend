// How can I set up a queue system so that when I fire A1->A2->A3. I can guarantee that they are appeneded as A1->A2->A3 in that order.

// For example, suppose A2 arrives before A1. I would want the action to wait upon the arrival and loading of A1.

var a1 = getPromiseForAjaxResult(ressource1url);
var a2 = getPromiseForAjaxResult(ressource2url);
var a3 = getPromiseForAjaxResult(ressource3url);

a1.then(function(res) {
    append(res);
    return a2;
}).then(function(res) {
    append(res);
    return a3;
}).then(append);