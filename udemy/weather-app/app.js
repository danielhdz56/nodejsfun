const yargs = require('yargs'); // Allows us to obtain input from terminal

const geocode = require('./geocode/geocode.js'); // Allows us to retrieve exports from geocode.js 

const argv = yargs //customization to input from terminal 
    .options({ //options are the flags that we can have when we input
        a: { //the flag to use when running node
            demand: true, //this is required, you can't run without an -a flag
            alias: 'address', //another way to write the same flag, --address
            describe: 'Address to fetch weather for', //message for help
            string: true //this tells it to always parse the address as a string 
        }
    })
    .help() //built in help flag --help
    .alias('help', 'h')
    .argv;


geocode.geocodeAddress(argv.address);
//7,20
