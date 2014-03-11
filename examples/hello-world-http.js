// Hello World HTTP

// load module http
var http = require('http');

// create an http server and
// listen for incoming connections
http.createServer(function (req, res) {
	
	// send response
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
	
}).listen(1337, '127.0.0.1');