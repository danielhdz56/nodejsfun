var http = require('http');
var url = require('url');
var fs = require('fs');
//remember that this is actively listening for "new calls on the url"
//for example even if it runs localhost:8080/summeeeeeeer.html 
//displays a 404 error
//if you go to localhost:8080/summer.html
//it will display the data in that file
//EVEN though you already ran through the fs.readFile function
//this is because it ends and is still being actively called on 
http.createServer(function(req, res) {
	//this is how we pass the requested url to the variable q
	var q = url.parse(req.url, true);
	//I declared a filename  .q.pathname
	var filename = "." + q.pathname;
	//this is going to read the file
	//localhost:8080/summer.html
	//localhost:8080/winter.html
	//all other files will display 404 Not Found
	fs.readFile(filename, function(err, data) {
		if (err) {
			//check status 404 Not Found and if its not found you're going to display some content of type text/html
			res.writeHead(404, {'Content-Type': 'text/html'});
			//you will display this content 404 Not Found and end fs.readFile
			return res.end("404 Not Found");
		}
		//this will tell it to display the data which is the content that is in those files
		//200 is the status code for OK
		res.writeHead(200, {'Content-Type': 'text/html'});
		//data represents what is in the html file
		res.write(data);
		//this ends the fs.readFile
		//remember that node.js keeps running forever
		return res.end();
	});
}).listen(8080);

//this is known as serving the file requested by the client
//we do this by parsing the query string combined with
//making Node.js behave as a file server 
