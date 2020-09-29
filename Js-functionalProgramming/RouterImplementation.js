// Concepts: Regex pattern matching, JS string replace using regex.

var variableNames = [];
var route = '/user/:id/:action'.replace(/([:*])(\w+)/g, function (full, dots, name) {
  console.log('full ', full);
  console.log('dot ', dots);
  console.log('name ', name);
  variableNames.push(name);
  return '([^\/]+)';
}) + '(?:\/|$)';
var match = 'http://site.com/user/42/save'.match(new RegExp(route));
