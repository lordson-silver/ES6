// Interchange the values of "a" and "b" without
// changing any of the existing code
// typing any numbers
// redeclaring the variables "a" and "b"
// When the code runs, it should output a is 8, b is 3

function test() {
    var a = "3";
    var b = "8";
    // do not change the code above--------
    
    var c = a;
    a = b;
    b = c;
    
    // -------do not change the code below
    console.log("a is " + a);
    console.log("b is " + b);
}
test();