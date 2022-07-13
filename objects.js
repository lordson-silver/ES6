// Using creator functions
// Creating Objects

let Car = {
  name : "Tesla",
  price : 50000,
  hasAutoPilot : function() {
    return(console.log(Has AutoPilot);)
  }
};

function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
};
var houseKeeper1 = new HouseKeeper("Annie", 22, 2, ["English", "Yoruba"]);


function Apartment(name, numOfRooms) {
    this.name = name;
    this.numOfRooms = numOfRooms;
};
var house1 = new Apartment("Shalom Place", 20);
var house2 = new Apartment("Eagles Pride", 22);


function User(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
};
