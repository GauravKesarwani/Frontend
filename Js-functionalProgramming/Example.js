// Imperative

var Bank = function(balance) {
  this.balance = balance;
}

Bank.prototype.withdraw = function ( amount ) {
  this.balance = this.balance - amount;
  return this.balance;
}

var bank = new Bank(100);


// calling withdraw with same amount returns different values
var withdraw1 = bank.withdraw(25);
var withdraw2 = bank.withdraw(25);

console.log(withdraw1);   // 75
console.log(withdraw2);   // 50

// functional

var FBank = function (balance) {
  this.balance = balance;
}


FBank.prototype.withdraw = function ( amount ) {
  return new fBank ( this.balance - amount );
}

const fBank = new FBank(100);

// Calling withdraw with the same argument
// returns the same values

var fwithdraw1 = fBank.withdraw( 25 );
var fwithdraw2 = fBank.withdraw ( 25 );
console.log(fWithdraw1.balance) // 75
console.log(fWithdraw2.balance) // 75

