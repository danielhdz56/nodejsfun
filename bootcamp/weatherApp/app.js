// import local libraries

const userSearch = require('./weather/userSearch');


//obtain user input 
const argv = process.argv;
const name = argv[2];
var location = argv[3];
location = encodeURIComponent(location);

//userSearch.createUser(name, location);
userSearch.WeatherAdmin()