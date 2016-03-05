var net = require('net');

var server = net.createServer(function(socket){
  console.log('A new client connected...');
});
// instend: server.on('connection',function(socket){});


server.listen(8899, 'localhost');
//  server.on('listening',function(){});

server.on('error', function(e) {
  if(e.code == 'EADDRINUSE') {
    console.log('listening port has already been used!');
  }
})
