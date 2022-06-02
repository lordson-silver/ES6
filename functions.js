// create a cost calculator using functions

function cost(accBalance, product, price, num) {
    var totalCost = Math.floor(price * num);
    var balance = accBalance - totalCost;
    alert("You gave me " + accBalance);
    alert(num + " " + product + " will cost: " + totalCost);
    alert("Your balance is " + balance);
}
cost(prompt("Give me some money"), prompt("What do you want to buy"), prompt("How much does it cost"), prompt("How many?"));