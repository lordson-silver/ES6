// Using creator functions

function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
};
var houseKeeper1 = new HouseKeeper("Annie", 22, 2, ["English", "Yoruba"]);