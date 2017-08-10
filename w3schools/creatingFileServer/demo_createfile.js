var fs = require('fs');
//BEFORE YOU RUN NOTICE THAT THERE IS NO FILE CALLED mynewfile1.txt in the folder that this is currently in!
//Watch it appear once you run it through the terminal
//The fs.appendFile() method appends specified content to a file.
//If the file does not exist, the file will be created
fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
	if (err) throw err;
	console.log('Saved!');
});