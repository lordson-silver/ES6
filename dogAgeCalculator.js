// Create a dogAge to humanAge calculator using the below formula
// humanAge = (dogAge -2) * 4 + 21

const readlineSync = require('readline-sync');
//readlineSync.question()

let dogAge = readlineSync.question("How old is your Dog? ");
let humanAge = ((dogAge - 2) * 4) + 21;
console.log(`Lol, if your Dog was Human it would be ${humanAge} years old. Haha`);
