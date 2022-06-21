// Using creator functions

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
    this.email = email;
    this.password = password;
    this.userName = userName;
};