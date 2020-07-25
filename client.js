const joinSession = () =>{
    const io = require('socket.io-client');
    const port = process.env.PORT || 4000;
    const socket = io.connect(`https://obitoschat.herokuapp.com/:${port}`);
    socket.emit('join', 'dfdsfsd');
}