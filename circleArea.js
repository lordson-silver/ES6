const readlineSync = require('readline-sync');
//readlineSync.question()

var r = readlineSync.question("Input a radius: ");
function circleArea(r) {
  return Math.floor(Math.PI * Math.pow(r, 2));
}

//alert(circleArea(r));
console.log(`The area of the circle of radius ${r} is: ${circleArea(r)}`);

// GABBIE
const cirArea = (r) => Math.floor(Math.PI * Math.pow(r, 2));
//alert(cirArea(r));
