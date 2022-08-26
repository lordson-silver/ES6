// Create a program, that ask's users to input their name and display it back to them
// like so : Hello Lordson
const readlineSync = require('readline-sync');
console.log("Hello " + readlineSync.question("What is your name? "));
