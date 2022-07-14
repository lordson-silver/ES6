// Using creator functions
// Creating Objects

let Car = {
  name : "Tesla",
  price : 50000,
  hasAutoPilot : function() {
    return(console.log("Has AutoPilot")); // Has AutoPilot
  }
};

function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name; 
    this.age = age; 
    this.yearsOfExperience = yearsOfExperience; 
    this.languages = languages; 
};

// get full summary using prototype
HouseKeeper.prototype.getFullSummary = function() {
    return(`${this.name} has ${this.age} years of experience and knows ${this.languages}`);
}


// function getFullSummary(obj) {
//     return(`${obj.name} is a ${obj.age} year old ${obj.yearsOfExperience} years experience housekeeper with ${obj.languages} languages`);
// };



    var houseKeeper1 = new HouseKeeper("Annie", 22, 2, ["English", "Yoruba"]); 
    // Annie is a housekeeper with 2 years of experience and knows English and Yoruba.

// log annie.getFullSummary()
console.log(houseKeeper1.getFullSummary());
// console.log(getFullSummary(houseKeeper1));

function Apartment(name, numOfRooms) {
    this.name = name;
    this.numOfRooms = numOfRooms;
};
var house1 = new Apartment("Shalom Place", 20);  // Shalom Place has 20 rooms.
var house2 = new Apartment("Eagles Pride", 22);  


function User(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
};
