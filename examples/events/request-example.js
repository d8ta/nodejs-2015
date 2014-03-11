var http = require('http');
var server = http.createServer();

server.listen(1337, '127.0.0.1');

// listen on request event
server.on('request', function(req, res) {
	res.end('Awesome request event');
});