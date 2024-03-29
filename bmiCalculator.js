/* Create a BMI calculator using functions
    The Body Mass Index (BMI) is a way of estimating the amount of body fat
    It's used in medicine to calculate the risk of heart disease
    BMI = weight (kg) divided by height squared (m**2)
    The task is to create a function that takes height and weight as inputs and gives the calculated BMI
        If my weight is 65kg and my height is 1.8m, I should be able to call the function like this:
        bmiCalculator(65,1.8);
        bmi should equal around 20 in this case.
*/

const readlineSync = require('readline-sync');
//readlineSync.question()

function bmiCalculator(weight, height) {
  let bmiCalculator = Math.round(weight / Math.pow(height, 2)); //(height**2) optimized to ES6 haha
  return bmiCalculator;
}
console.log("Your BMI is: " + bmiCalculator(readlineSync.question("Input your weight: "), readlineSync.question("Input your height: ")));

// Gabbie
const bmiCal = (w, h) => Math.round(w / h ** 2);
//console.log(bmiCal(64, 1.8));
