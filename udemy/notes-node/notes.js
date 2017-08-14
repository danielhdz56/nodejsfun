console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {   // tries to see if there is a file called notes-data.json and it will return said data into an object
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) { // In the case that there isn't a file it will return an empty array
        return [];
    }
};

var saveNotes = (notes) => { // This writes to the file notes-data.json, a string containing all the notes
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    //takes the note as an argument and checks if there is one already with that title
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) { //if the array is empty than it will create a note
        notes.push(note);
        saveNotes(notes);
        return note;
    }  
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note: ', title);
};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //fiter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title); //By using !==, filteredNotes will get loaded with titles that don't match the title
    //save new notes array
    saveNotes(filteredNotes);
    //return true if a note was removed
    return notes.length !== filteredNotes.length;    
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};