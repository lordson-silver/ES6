const q = new Date();
// An array of date values 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Getting date day - month - year
console.log(days[q.getDay()] + " " + months[q.getMonth()] + " " + q.getFullYear());
// Getting time hour - minutes - seconds 
console.log(q.getHours() + ":" + ('0' + q.getMinutes()).slice(-2) /* + ":" + q.getSeconds() */+ " " +(q.getHours()>12?"PM":"AM"));