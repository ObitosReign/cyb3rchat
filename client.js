const io = require('socket.io-client');

const joinSession = () =>{
    const socket = io.connect(`https://obitoschat.herokuapp.com/`);
    socket.emit('join', 'dfdsfsd');
    console.log("DDD");
}