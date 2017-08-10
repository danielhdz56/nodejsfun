var fs = require('fs');
fs.rename('renamethisfile.txt', 'newname.txt', function (err) {
	if (err) throw err;
	console.log('File Renamed!');
});

//PAY ATTENTION TO THE NAME OF THIS FILE ON THE LEFT
//WATCH IT CHANGE