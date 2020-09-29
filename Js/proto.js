// Inheritence: Engineer --> Worker --< Employee --> Object 

var chris = new Engineer('Pigman, Chris', ['jsd'], 'fiji');

chris.__proto__ == Engineer.prototype;
chris.__proto__.__proto__ == WorkerBee.prototype;
chris.__proto__.__proto__.__proto__ == Employee.prototype;
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;