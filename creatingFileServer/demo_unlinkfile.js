var fs = require('fs');

fs.unlink('filetodelete.txt', function (err) {
	if (err) throw err;
	console.log('File deleted');
});

//NOTE THAT THIS FILE DELETES THE FILE ON THE LEFT
//REPLACE IT IF YOU RUN THIS FUNCTION 