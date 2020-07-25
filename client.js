const io = require('socket.io-client');
console.log("DDD");
const joinSession = () =>{
    const socket = io.connect(`https://obitoschat.herokuapp.com/`);
    socket.emit('join', 'dfdsfsd');

}