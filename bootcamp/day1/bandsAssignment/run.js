var music = require('./bands.js');

var firstArg = process.argv[2];


console.log(music.length);
console.log(`A punk band is ${music.bands.punk}`);
console.log(`A rap band is ${music.bands.rap}`);
console.log(`A classic band is ${music.bands.classic}`);