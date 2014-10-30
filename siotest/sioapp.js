var app = require('express')(),
  server = require('http').Server(app),
  io = require('socket.io')(server);

server.listen(80);

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/js/socket.io.js', function(req,res){
  res.sendFile(__dirname + '/node_modules/socket.io/node_modules/socket.io-client/socket.io.js');
});

io.on('connection', function (socket) {
  console.log("Connected socket");
  socket.emit('news', { hello: 'world' });
  socket.on('msg', function (data) {
    console.log(data);
    io.sockets.emit('recv', data );
  });
});
