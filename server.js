const express = require('express');
const chat = express();

const http = require("http");
const server = http.createServer(chat);

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    socket.on('join', (alias) => {
        console.log(`${alias} entered the chat!`);
        io.emit('join', `${alias} has entered Obito's Hackers chat`);
        socket.emit(`join`, `Welcome ${alias} ;)`);
    })
});

io.on('send', (message) => {
    alert("ddd");
    socket.broadcast.emit('send', message);
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