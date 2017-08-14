//packages from node or npm
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//packages made inhouse
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body); //Pass in the arguments --title and --body from terminal
    if (note){ //taken from return in notes.js
        console.log('Note created');
        notes.logNote(note); //prints a spacer, and the title and body of the note that was returned
    } else { //when notes is undefined
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note)); // Iterate over each object and run the logNote function
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note){
        console.log('Note found');
        notes.logNote(note);        
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    // The condition noteRemoved ?if? true will declare message with, 'Note was removed'
    var message = noteRemoved ? 'Note was removed' : 'Note not found'; //The truthiness of this is determined by the return statement in notes.js
    console.log(message);
} else {
    console.log('Command not recognized');
}