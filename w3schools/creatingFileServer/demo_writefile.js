var fs = require('fs');

fs.writeFile('mynewFile3.txt', 'Hello content', function (err) {
	if (err) throw err;
	console.log('Saved');
});