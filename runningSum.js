const readlineSync = require('readline-sync');

let num = 0;
let input = 0;
do {
	input = readlineSync.question("Input a number: ");
	output = Number(num) + Number(input);
	num += Number(input);
	console.log(output);
} while (input>=0)