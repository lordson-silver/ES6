/*
    Write a function that will select a random name from a list of names.
    The person selected will have to pay for everbody's food bill.
*/
 var names = ["Lordson", "Stiles", "Michael", "Mimi", "Preshila", "Raymond"];

function whosPaying(names) {
    var numPeople = names.length;
    var randomPerson = names[(Math.floor(Math.random() * numPeople))];
    return randomPerson + " is going to buy lunch Today.";
} var message = whosPaying(names);
alert(message);