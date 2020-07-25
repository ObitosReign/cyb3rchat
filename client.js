const io = require('socket.io-client');
console.log("DDD");
const joinSession = () =>{
    const socket = io.connect(`http://localhost:${port}`);
    socket.emit('join', 'dfdsfsd');

}