const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = 4001;
const server = app.listen(PORT, ()=> {
    console.log(`App initiated on port ${PORT}`);
})

// Built-in middleware to serve static files
app.use(express.static('public'))

// Socket.io setup
const io = socket(server); // socket.io is waiting around here on the server for the client/browser to make a connection and setup a web socket between them

// io listens to an event called connection
io.on('connection', (socket) => {
    console.log('Socket connection established', socket.id)

    // listen for the message sent by client
    // listen for the socket 'chat' and receives the msg from client1 and send that back to all sockets
    // (ie)Back to all users connected on that server via event 'chat'
    socket.on('chat', (data)=> {
        io.sockets.emit('chat', data)
    })
})