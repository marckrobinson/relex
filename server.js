var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var port = process.env.PORT || 50000;

app.use(express.static(__dirname + '/public'));
// app.get('/', function(req,res){
// 	console.log(req);
// 	res.sendfile(__dirname + '/public/index.html');
// })
app.listen(port);

// var http = require('http')
// var port = process.env.PORT || 50000;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello Node World!\n');
// }).listen(port);
