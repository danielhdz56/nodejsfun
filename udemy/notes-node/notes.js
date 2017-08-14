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
    var notes = fetchNotes(); //fetches all notes from notes-data.json
    var note = { // creats an object taking in the title and body that are taken as arguments from terminal
        title,
        body
    };
    //takes the note as an argument and checks if there is one already with that title
    var duplicateNotes = notes.filter((note) => note.title === title);
        //note that this syntax is an abbreviated version of:
        // var duplicateNotes = notes.filter((note) => {
                //return note.title === title;
        // });
        //this is possible because there is only one return
    if (duplicateNotes.length === 0) { //if the array is empty than it will create a note
        notes.push(note); //gets added to the notes object
        saveNotes(notes); //stringifies notes object and writes it to notes-data.json
        return note; //this return statement is called back in app.js, will be undefined if not run
    }  
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    //takes the note as an argument and checks if there is one already with that title
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0]; // If there is no match then it'll be an empty array, which will run our else statement
};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //fiter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title); //By using !==, filteredNotes will get loaded with titles that don't match the title
    //save new notes array
    saveNotes(filteredNotes); //This allows only the filtered notes to be written into notes-data.json
    //return true if a note was removed
    return notes.length !== filteredNotes.length; 
};

var logNote = (note) => {
    console.log('-----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = { //how we can call the above functions in app.js
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};