const io = require('socket.io-client');

const joinSession = () =>{
    const socket = io.connect(`https://obitoschat.herokuapp.com/`);
    const alias = document.getElementById('alias').value
    socket.emit('join', alias);
    socket.on('join', (data) => {
        document.getElementById('screen').innerHTML = data;
    });
}