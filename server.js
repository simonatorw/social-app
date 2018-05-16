const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', require('./controllers/posts'));
app.use(require('./controllers/static'));

const server = app.listen(3000, function() {
	console.log('Server running on http://simon.com:3000');
});

//app.use(express.static('./static'));
require('./websockets').connect(server);
