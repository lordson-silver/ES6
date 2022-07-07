// 99 bottles of Beer on the wall, 99 bottles of Beer.
// Take one down pass it around 98 bottles of Beer on the wall.

var noOfBeer = 99;
function beer(noOfBeer) {
  while (noOfBeer >= 0) {
    var lowerNumber = noOfBeer - 1;
    if (lowerNumber == 0) {
      lowerNumber = "no more";
    }
    if (noOfBeer >= 1) {
      console.log(
        noOfBeer +
          " bottles of Beer on the wall, " +
          noOfBeer +
          " bottles of Beer. Take one down pass it around " +
          lowerNumber +
          " bottles of Beer on the wall."
      );
    } else {
      console.log(
        "No more bottles of Beer on the wall, no more bottles of Beer. Go to the store to buy more, 99  bottles of Beer on the wall."
      );
    }
    noOfBeer--;
  }
}
// beer(noOfBeer);

// Gabbie
const calcBeer = () => {
  for (let i = 99; i >= 0; i--) {
    i - 1 >= 0
      ? console.log(
          `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down pass it around, ${
            i - 1
          } bottles of beer on the wall`
        )
      : console.log(
          "No more bottles of Beer on the wall, no more bottles of Beer. Go to the store to buy more, 99  bottles of Beer on the wall."
        );
  }
};
calcBeer();
