var http = require('http');
//this is also a module
var url = require('url');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	//we can use url.parse because we have "required it above
	//remember that req is the request argument by the client
	//req.url is the URL string to parse
	//true is the parseQueryString, if true, the query property will always be set to an object returned by the querystring module's parse() method
	//if this was false, the quesry property on the returned URL object will be an unparsed, undecoded string
	//To summice the url.parse() method takes a URL string, parses it, and returns a URL object
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month + " " q.day;
	res.end(txt);
}).listen(8080);

