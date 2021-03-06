/*
    Write a program that prints the numbers from 1 to 100.
    But for multiples of three print "Fizz" instead of the
    number and for the multiples of five print "Buzz". For 
    numbers which are both multiples of both three and five 
    print "FizzBuzz".
*/

var output = [];

function fizzBuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }

  console.log(output);
}

// GABBIE
const fizz = () => {
  for (let i = 100; i >= 0; i--) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
};

fizz();
