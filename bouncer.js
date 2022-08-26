const readlineSync = require('readline-sync');
//readlineSync.question()

var guestList = ["Lordson", "Stiles", "Michael", "Mimi", "Preshila", "Raymond"];
/*
    Create a program that prompts a user to imput their name
    when they've inputed their names, it'll then check 
    the guest list for their name if their name is there,
    alert Welcome theirName else aler Sorry theirName, I dont know you.
*/
function bouncer(yourName) {
  if (guestList.includes(yourName) == true) {
    return "Welcome " + yourName;
  } else {
    return "Sorry " + yourName + ", I dont know you.";
  }
}
// alert(bouncer(prompt("What is your name?")));

// GABBIE
const checkList = (yourName) => {
  guestList.includes(yourName)
    ? console.log(`Welcome ${yourName}`)
    : console.log(`Sorry ${yourName}, I dont know you`);
};

checkList(readlineSync.question("What is your name? "));
