var util = require("util");
var EventEmitter = require('events').EventEmitter;

function HelloWorld() {
	EventEmitter.call(this);
	var that = this;
	
	(function hello() {
		setTimeout(hello, 1000);
		that.emit('hello', 'world');
	})();
}
util.inherits(HelloWorld, EventEmitter);

new HelloWorld().on('hello', function(data) {
	console.log('Hello ' + data);
});
