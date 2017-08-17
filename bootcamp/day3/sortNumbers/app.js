const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs
    .command('sort', 'Sort a series of integers')
    .help()
    .argv;

var command = argv._[0];

var compareNumbers = (a, b) => a - b;

if (command === 'sort') {
    numbersToSort = argv._[1];
    numbersToSort = numbersToSort.split(',');
    for (var i = 0; i < numbersToSort.length; i++) {
        numbersToSort[i] = parseInt(numbersToSort[i], 10);
    }
    console.log(numbersToSort.sort(compareNumbers));
}