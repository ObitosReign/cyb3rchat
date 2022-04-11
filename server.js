const express = require('express');
const chat = express();
const http = require("http");
const server = http.createServer(chat);
const io = require('socket.io')(server);

const users = [];
let color;

io.on('connection', (socket) => {
    const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
    color = `rgb(${r},${g},${b})`;
    
    socket.on('join', (alias) => {
        console.log(`${alias} entered the chat!`);
		users.push({alias: alias, color: color});
        io.emit('join', `<i style="color:${color}">${alias}</i> has joined!`);
        socket.emit(`join`, `Welcome <i style="color:${color}">${alias}</i>`);
        socket.on('send', (message) => {
            data = message.split('*@&#%@&#/.,');
            for(let i=0; i<users.length; i++){  
                if(users[i].alias === data[1]){
                    color = users[i].color;
                    io.emit('send', `<div class="user"><span style="color:${color}">${data[1]}:</span> ${data[0]}</div>`);
                    break;
                }
            }
        }); 
    });   
});

chat.use(express.static(__dirname + '/'));

const port = process.env.PORT || 80;

server.listen(port, () => {
    console.log(`Listening on http://0.0.0.0:${port}`);
});
