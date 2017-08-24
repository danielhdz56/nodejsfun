// import libraries
const weather = require('weather-js');
const fs = require('fs');

var UserSearch = function (name, location, date) {
    this.name = name,
    this.location = location,
    this.date = new Date();
    this.getWeather = function () {
        weather.find({
            search: this.location,
            degreeType: 'F'
        }, (err, result) => {
            if (err) console.log(err);
            console.log(JSON.stringify(result, null, 2));
            
        })
    };
};

//UserSearch.prototype.getWeather = 

var createUser = (name, location) => {
    var anonUser = new UserSearch(name, location);
    console.log(anonUser);
    anonUser.getWeather();
}



var fetchLogs = () => {
    try {
        var logToString = fs.readFileSync('logs.json');
        return JSON.parse(logToString);
    } catch (e) {
        return [];
    }
}

var saveLogs = (logs) => {
    fs.writeFileSync('logs.json', JSON.stringify(logs));
}

var WeatherAdmin = function(name, location) {
    this.newUserSearch = new UserSearch(name, location);
    this.newUserSearch.saveLogs = () => {
        var logs = fetchLogs();
        var log = {
            name,
            location,
            date: this.newUserSearch.date
        };
        logs.push(log);
        saveLogs(logs);
    },
    this.getData = () => {
        console.log(fetchLogs()) 
    }
};
// WeatherAdmin.prototype = new UserSearch();
// WeatherAdmin.prototype.writeData = function () {
    
// };
// WeatherAdmin.prototype.getData = function () {
//     return fetchLogs();
// };


//var admin = new WeatherAdmin('daniel', 'houston');
admin.newUserSearch.saveLogs();
admin.getData();

module.exports = {
    createUser,
    WeatherAdmin
}