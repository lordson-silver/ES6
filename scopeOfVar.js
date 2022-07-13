/* In JS we have 2 types of scopes - Global & Local
depending upon where you create your variables */

let a = 5;
b = "Global";

function scope(){
  let b = "Local"
  return(
    console.log(
      a, b
    )
    // should output 5 Local
    // Variable created in a f cannot be used outside the function
    // Variables created outside can be used inside tho lol       
    }
  )
}
scope();

console.log(b);
