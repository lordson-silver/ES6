// A two value calculator
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
const calc = (x, y, oper) => {
  if (oper === "-") return x - y;
  if (oper === "*") return x * y;
  if (oper === "+") return x + y;
  if (oper === "/") return x / y;
};
console.log(calc(2, 1, "-"));
