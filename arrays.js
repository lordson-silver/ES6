// Fill arrays with data

// let newArray = new Array(4).fill("Hello World");
// console.log(newArray);

// Remove duplicate from arrays

const readlineSync = require('readline-sync');
//readlineSync.question();

let dup = [
    "Facebook",
    "Twitter",
    "Amazon",
    "Facebook",
    "Tesla",
    "Apple",
    "Netflix",
    "Amazon",
    "Twitter"
  ]
  let noDup = Array.from(new Set(dup));
  console.log(noDup);

  // Merge arrays
  let array1 = [
      "Twitter",
      "Facebook",
      "Tesla",
      "Apple"
    ];
  let array2 = [
      "Amazon",
      "Netflix",
      "Microsoft",
      "Dropbox",
      "Slack"
    ];
  let techBrands = [
     ...array1,
     ...array2
   ];

  techBrands.push("Xiaomi");
  techBrands.pop();

    for (var i = 0; i < techBrands.length; i++) {
      console.log(techBrands[i])
    };

