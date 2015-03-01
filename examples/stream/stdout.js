var child = execFile('livestreamer', 
	['twitch.tv/' + twitchUsername, 'best'], {}, function() {
	// callback when finished
});

child.stdout.on('data', function(data) {
	console.log(data);
});

child.stderr.on('data', function(data) {
	console.log(data);
});