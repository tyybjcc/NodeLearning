/**
 * net.Socket
 * socket.address()
 * socket.setEncoding('utf8')
 * socket.bytesRead
 * 
 * */
 
 var net = require('net');
 var server = net.createServer();
 server.on('connection', function(socket){
   console.log(socket.address());
   socket.setEncoding('utf8');
   socket.on('data',function(data) {
	   console.log(data);
	   console.log(socket.bytesRead);
   });
 });
 
 server.listen(8899,'localhost');
