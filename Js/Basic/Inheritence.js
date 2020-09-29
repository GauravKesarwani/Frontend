// Implement inheritence model in JavaScript

// Inheritence hierarchy Employee. <-- Worker <-- Salesperson
// Employee <-- Manager

function Emloyee(that, name, age, department){
  this.name = name;
  this.age = age;
  this.department = department;
}

function Manager() {
  Employee.call(this, 'Gaurav', 40);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function Worker() {
  Employee.call(this);
  this.projects = [];
}
Worker.prototype = Object.create(Employee.prototype);
Worker.prototype.constructor = Worker;

// Salesperson inherits from Worker
// Using call to set up the inheritance hierarchy

function SalesPerson() {
   Worker.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(Worker.prototype);
SalesPerson.prototype.constructor = SalesPerson;


// Engineer inherits from Worker
function Engineer() {
   Worker.call(this);
   this.dept = 'engineering';
   this.machine = '';
}
Engineer.prototype = Object.create(Worker.prototype)	
// This sets up dynamic inheritance. 
// If later a property is assigned to Worker prototype, it will be inherited by Engineer prototype.
Engineer.prototype.constructor = Engineer;


// Passing parameters to base constructor

function Engineer(name, projs, mach) {
  Worker.call(this, name, 'engineering', projs);
  this.machine = mach || '';
}

// Calling the Worker constructor ensures that an Engineer object starts out with the properties specified
// in all constructor functions that are called. However, if you later add properties to the 
// Employee or Worker prototypes, those properties are not inherited by the Engineer object.
// You need to explicitly set it up using prototype chain.

// -------------------------------------

// Another way to write inheritance


function Engineer(name, projs, mach) {
  this.base = Worker;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
Engineer.prototype = new Worker;
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
Employee.prototype.specialty = 'none';


// Java

public class Manager extends Employee {
   public Employee[] reports = 
       new Employee[0];
}

public class Worker extends Employee {
   public String[] projects = new String[0];
}