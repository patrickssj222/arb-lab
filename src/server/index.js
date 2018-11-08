var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");

//Establishing Socket connection
io.on('connection', function(socket){

  //Listening to filename
  socket.on('file select', function(msg){
    console.log('message: ' + msg);

    //Reading corresponding file and sending content
    if(msg!=""){
      fs.readFile(msg, "utf8", function(err, data) {
        if (err) throw err;
        console.log(data);
        io.emit('file display', data);
      });
    }
    else{
      io.emit('file display',"");
    }
  });
});

//Establishing express server
http.listen(4000, function(){
  console.log('listening on *:4000');
});
