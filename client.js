const joinSession = () =>{

    const socket = io.connect(`http://localhost:${port}`);
    socket.emit('join', 'dfdsfsd');
}