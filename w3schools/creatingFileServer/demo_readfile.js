var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	//The first argument of the callback is reserved for an error object.
	//If an error occurred, it will be returned by the first err argument
	//The second argument of the callback is reserved for any successful response data.
	//If no error occurred, err will be set to null and any successful data will be returned in the second argument
	//SEE demo_readfileERR.js
	fs.readFile('demofile1.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);