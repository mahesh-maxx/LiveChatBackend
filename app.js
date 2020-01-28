var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



/*io.on('connection', function(socket){
    console.log('Connection made');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});*/

io.on('connection', function(socket){
    console.log('connection');
    socket.on('message', function(message){
        console.log('Message received: ' + message);
        io.emit('message', {type:'new-message', text:message});
    })
})

http.listen(5000, function(){
  console.log('listening on *:5000');
});