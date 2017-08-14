// Request allows us to make http calls
const request = require('request');

request({
    // The url is the http call to be made
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1338%20Cross%20Draw%20Dr%20Houston',
    // this just lets request know that it is infact in json format
    // allows for it to load in object form 
    json: true
}, (error, response, body) => { //this is the callback 
    // printing out the request
    console.log(JSON.stringify(body, undefined, 2)); //This pretty prints the object by using stringify
});