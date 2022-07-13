/* Functions are one of the fundamental building
block in JavaScript.
A function is a set of statement that performs
a task or calculates a value.
A JavaScript function is a block of code designed
to perform a particular task.
A JavaScript function is is executed when "something"
invokes it (calls it).
*/
// (Q1) create a cost calculator using functions

function cost(accBalance, product, price, num) {
    var totalCost = Math.floor(price * num);
    var balance = accBalance - totalCost;
    return(
    /*alert*/console.log(`You gave me ${accBalance}, `+
    `${num} product will cost: ${totalCost}, `+
    `Your balance is ${balance}`)
  );}
 cost(500, "Drink", 120, 2);
