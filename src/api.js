import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000/');

//File Name (client to server)
function getData(file){
  socket.emit('file select', file);
}

//File Content (server to client)
function subscribeToTable(callback){
  console.log('test3');
  socket.on('file display', (message)=>callback(message));
}

export {getData, subscribeToTable};
