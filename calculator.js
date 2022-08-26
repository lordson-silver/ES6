// A two value calculator

const readlineSync = require('readline-sync');
//readlineSync.question()

function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

// GABBIE
const calc = (x, oper, y) => {
  if (oper === "-") return x - y;
  if (oper === "*") return x * y;
  if (oper === "+") return x + y;
  if (oper === "/") return x / y;
};
console.log(
	"Your answer is: " +
	calc(readlineSync.question("First number: "), readlineSync.question("Operrator ('-','*','+','/'): "), readlineSync.question("Second Number: "))
);
