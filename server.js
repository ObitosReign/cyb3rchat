const express = require('express');
const chat = express();

const http = require("http");
const server = http.createServer(chat);

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        console.log(data);
        io.emit('join', 'ssssssss');
    })
});

chat.use(express.static(__dirname + '/'));

chat.get('/', (req, res) => {
    res.sendFile('/', {
        root: __dirname
    });
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});