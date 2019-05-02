import express, { static } from 'express';
const app = express();
const http = require('http').Server(app);

app.use(static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/html/index.html');
});

http.listen(3000, function() {
  console.log('listening on port 3000');
});