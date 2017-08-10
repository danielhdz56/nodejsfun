var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Hello World!");
	fs.readFile('/foo.txt', function(err, data) {
		//If an error occurred, handle it (throw, propagate, etc)
		if(err) {
			//LOOK AT THE TERMINAL!
			console.log('Unknown Error');
			return;
		}
		//Otherwise, log the file contents
		console.log(data);
	});
	res.end();
}).listen(8080);
//NOTE THIS WILL FAIL BECAUSE THERE IS NO FILE CALLED foo.txt