var net = require('net');

var server = net.createServer(function(socket){
  console.log('A new client connected...');
  var connections = server.getConnections(function(err,count) {
	  	 console.log("connection count: "+count); 
  });
});
// instend: server.on('connection',function(socket){});

server.maxConnections = 2;

server.listen(8899, 'localhost');

// server.listen(8899, 'localhost', function(){});
//  server.on('listening',function(){});

server.on('error', function(e) {
  if(e.code == 'EADDRINUSE') {
    console.log('listening port has already been used!');
  }
})



setTimeout(function(){
	//服务器拒绝新的连接；待现有连接断开，服务器关闭
	server.close(function(){
		console.log('server is closed');
	});
},10000);
