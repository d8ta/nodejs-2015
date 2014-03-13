var http = require('http');
var util = require('util');
var stream = require('stream');
var server = http.createServer();

server.listen(1337, '127.0.0.1');

// listen on request event
server.on('request', function(req, res) {
	var parser = new JsonParser();
	req.pipe(parser);
	
	parser.on('data', function(data) {
		console.log(data.username, data.password);
	});
	
	res.end();
});

// My JsonParser Constructor
function JsonParser() {
	stream.Transform.call(this);
	this.body = '';
	this._writableState.objectMode = false;
	this._readableState.objectMode = true;
}
util.inherits(JsonParser, stream.Transform)

JsonParser.prototype._transform = function(chunk, encoding, done) {
	this.body += chunk;
	done();
};

JsonParser.prototype._flush = function(done) {
	try {
		var json = JSON.parse(this.body);
		this.push(json);
		this.push(null);
	} catch(e) {
		this.emit('error', e);
	}
	done();
};

// curl -X POST -H "Content-Type: application/json" -d '{"username":"julian","password":"geheim"}' http://localhost:1337