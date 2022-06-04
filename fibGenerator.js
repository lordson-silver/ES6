/*
   Fibonacci Challenge
    Fibonacci was an italian mathematician who came up with the Fibonacci sequence
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
    where every number is the sum of the two previus ones.

    Craeate a function where you can call it by writing:
    fibGenerator(n), where 'n' is the number of items in the sequence.
    e.g, fibGenerator(3) should output [0,1,1]
    # the first two numbers in the sequencemust be 0 and 1.
*/


function fibGenerator(n) {
   var seq = [];
   if (n === 1) {
      var seq = [0];
   } else if (n === 2) {
      var seq = [0, 1];
   } else {
      var seq = [0, 1]
   for (var i = 2; i < n; i++) {
      seq.push(
         seq[seq.length - 2] + seq[seq.length - 1]);
   }}

   return seq;
   
}