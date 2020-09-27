const express = require('express');
const chat = express();
const http = require("http");
const server = http.createServer(chat);
const io = require('socket.io')(server)

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
                    io.emit('send', `<i style="color:${color}">${data[1]}: ${data[0]}</i>`);
                    break;
                }
            }
        }); 
    });   
});

chat.use(express.static(__dirname + '/'));

chat.get('/cv', (req, res) => {
    res.sendFile('/', {
        root: __dirname
    });
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});