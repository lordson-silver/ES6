/*
    Write a program that works out wether if a given year is a leap year.
    A normal year has 365 days, with an extra day in February.
    The reason why we have leap years is really fascinating.

    This is how to work out wether a particular year is a leap year:
        every year that is evenly divisible by 4
        except every year that is evenly divisible by 100
        unless the year is also evenly divisible by 400
*/

function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
           if (year % 400 === 0) {
               return "Leap Year.";
           } else { return "Not Leap Year."; }
        } else { return "Leap Year."; }
    } else { return "Not Leap Year."; }
}

alert(isLeap(prompt("Input a year")));