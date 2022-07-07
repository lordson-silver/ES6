// Create a function that tells how many Days, Weeks and Months we have left if we live until 90yrs old
// it will take your current age as the input and console.log a message with our time left in this format:
// You have x days, y weeks and z months left.
// Where x, y & z are replaced with the actual calculated numbers
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year

function lifeInWeeks(age) {
  let assAge = 90 - age;
  var x = assAge * 365;
  var y = assAge * 52;
  var z = assAge * 12;
  console.log("Assuming you live Until 90 years old.");
  console.log("You have " + x + " days left.");
  console.log(y + " weeks left.");
  console.log(z + " months left.");
}
lifeInWeeks(12);

// GABBIE
const lifeLeft = (age) =>
  `Assuming you live until 90, you have ${(90 - age) * 365} days left, ${
    (90 - age) * 52
  } weeks left, ${(90 - age) * 12}`;

console.log(lifeLeft(12));
