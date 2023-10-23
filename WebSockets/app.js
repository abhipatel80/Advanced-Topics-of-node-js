const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Define a connection
io.on('connection', (socket) => {
    console.log('User connected.');

    // Handle custom events
    socket.on('chat-msg', (msg) => {
        // Broadcast the message to all connected clients
        socket.emit('get-msg', msg);

        // Broadcast the message to all connected clients except sender
        socket.broadcast.emit("get-msg-except-me", msg);

        // Broadcast only specific group or rooms or except some group
        socket.to("room1").to("room2").except("room3").emit("hello");
        socket.in("room1").in("room2").emit("hello");

        // to give timeout for emit message
        socket.timeout(8000).emit("delay-msg", "Hello after 8 seconds");
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
