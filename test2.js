// Create a var that stores the name the user enters via prompt
// Capitalize the first letter of their name
// --------------------
// isolate the first char
// turn the first char to toUpperCase
// isolate the rest of their name
// change to lower case
// concactenate the first char with the rest of the char
// --------------------
// Then use the capitalized version of their name to greet them
// Hello Lordson

var name = prompt("what is your name?");
alert("Hello " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());