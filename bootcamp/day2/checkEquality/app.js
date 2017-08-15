const yargs = require('yargs');

const argv = yargs.argv;
const firstArg = argv._[0];
const secondArg = argv._[1];

if(firstArg === secondArg){
    console.log('They are equal');
    console.log(true);
    console.log('Are they multiples of 7?');
    if(firstArg%7===0 && secondArg%7===0){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('They are not equal');
    console.log(false)
}
