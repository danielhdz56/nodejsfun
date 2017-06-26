var http = require('http');

//Create a server object:
//The function passed into the http.createServer() has a req and res argument
//The req argument represents the request from the client, as an object(http.IncomingMessageobject).
http.createServer(function (req, res) {
	//If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
	//The first argument is the status code, 200 means that all is OK
	//The second argument is an object containing the response headers
	res.writeHead(200, {"Content-Type": "text/html"});
	//Write a response to the client
	res.write("Hello World!");
	//The object has a property called "url" which holds the part of the url that comes after the domain name:
	res.write(req.url)
	//End the response
	res.end();
	//The server object is ACTIVELY listening on port 8080
	//The function passed into the http.createServer() method, will be executed
	//when someone tries to access the computer on port 8080
}).listen(8080);