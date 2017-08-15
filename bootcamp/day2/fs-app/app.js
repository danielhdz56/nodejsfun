//packages from node or npm
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//packages inhouse
const text = require('./text.js');

//Add commands 

var fetchFile = () => {
    try {
        var fileString = fs.readFileSync('best_things_ever.txt', 'utf-8');
        fileString = fileString.split(', ');
        fileString.forEach((string) => console.log(string))
    } catch(e) {
        return '';
    }
}
fetchFile();