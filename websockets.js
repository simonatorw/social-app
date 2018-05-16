const ws = require('ws');

exports.connect = function(server) {
	let wss = new ws.Server({server: server});
	
	wss.on('connection', ws => {
		ws.send('hellosimon');
	});
	wss.on('close', ws => {
		wss = new ws.Server({server: server});
	});
};