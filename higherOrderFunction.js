const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2002, end: 2014},
  {name: "Company Six", category: "Finance", start: 1986, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1981, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1986},
];

const ages = [33,12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (var i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// foreach

// companies.forEach((company) => {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let beer = [];
// for (var i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     beer.push(ages[i]);
//   }
// }
//
// const beer = ages.filter(function(age){
//   if(age >= 21) {
//     return true;
//   }
// });

const beer = ages.filter(age => age >= 21);


console.log(beer);
