const geocoder = require('geocoder');
const yargs = require('yargs');

const argv = yargs.argv;

var command = argv._[0];
var input = process.argv[2];

// Geocoding 
geocoder.geocode(command, function ( err, data ) {
    // do something with data 
    console.log(JSON.stringify(data, undefined, 2));
  });