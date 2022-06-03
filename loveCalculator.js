prompt("What is your name?")
prompt("What is their name?")

function loveCalculator() {
    var loveScore = Math.round(Math.random()*100);
    if (loveScore > 70){
        alert("Your loveScore is " + loveScore + "%. You love each other like Kanye loves Kanye");
    } 
    if (loveScore > 30 && loveScore <= 70) {
        alert("Your loveScore is " + loveScore + "%");
    }
    if (loveScore < 30) {
        alert("Your loveScore is " + loveScore + "%. You two go together like Oil and Water");
    }
}
loveCalculator();