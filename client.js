const io = require('socket.io-client');

const chatContainer = document.getElementById("chat-container");
const alias = document.getElementById("alias");
const label = document.getElementById("label");
const login = document.getElementById("login");
const chat = document.getElementById("chat");
const screen = document.getElementById("screen");
const input = document.getElementById("input");

chatContainer.style.height = window.innerHeight + 'px';

function joinSession() {
    if(alias.value === '') {
        label.innerHTML = '<b>Please create an alias!!!</b>';
    } else {
        login.style.display = 'none';
        chat.style.display = 'block';

        const socket = io.connect(`https://obitoschat.herokuapp.com/`);
        const userAlias = alias.value;
        socket.emit('join', userAlias);
        socket.on('join', (data) => {
            screen += data + '<br>';
        });
    }
}

function messaging() {
    socket.emit('send', input.value);
    socket.on('send', (ouput) => {
        screen.innerHTML += output + '<br>;'
    });
}