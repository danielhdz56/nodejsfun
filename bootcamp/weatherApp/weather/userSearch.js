// import libraries
const weather = require('weather-js');

var UserSearch = function (name, location){
    this.name = name,
    this.location = location,
    this.date = new Date.now();
};

UserSearch.prototype.getWeather = function(){
    weather.find({
        search: this.location, 
        degreeType: 'F'
    }, (err, result) => {
        if(err) console.log(err);
        console.log(JSON.stringify(result, null, 2));
    }
)};

var createUser = (name, location) => {
    var anonUser = new UserSearch(name, location);
    console.log(anonUser);
    anonUser.getWeather();
}

module.exports = {
    createUser
}
