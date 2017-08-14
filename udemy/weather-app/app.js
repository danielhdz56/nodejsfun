// Request allows us to make http calls
const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true //this tells it to always parse the address as a string 
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
var encodedAddress = encodeURIComponent(argv.address);
   
request({
    // The url is the http call to be made
    url: `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`,
    //url: 'https://mapsgleapis.com/maps/api/geocode/json?address=Old%20College,%20South%20Bridge,%20Edinburgh%20EH8%209YL,%20UK',   //To test error parameter on request callback 
    // this just lets request know that it is infact in json format
    // allows for it to load in object form 
    json: true
}, (error, response, body) => { //this is the callback that runs after the http request is made
    // The body is the core data that comes back from the server
    // It is the JSON content from this request
    // It is not unique to the request module, 
    // It is part of the http request
    // printing out the request
    //console.log(JSON.stringify(body, undefined, 2)); //This pretty prints the object by using stringify
    //console.log(JSON.stringify(response, undefined, 2)); // This prints the status code (among other things)
        // the first set of headers are set by google,
        // the second set of headers is set by us when we set json property to true
    // The error parameter consist of the errors that occur when the request is made
    //console.log(JSON.stringify(error, undefined, 2));
    
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});