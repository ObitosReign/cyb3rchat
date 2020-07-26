const io = require('socket.io-client');

const chatContainer = document.getElementById("chat-container");
const alias = document.getElementById("alias");
const label = document.getElementById("label");
const login = document.getElementById("login");
const chat = document.getElementById("chat");
const screen = document.getElementById("screen");
const message = document.getElementById("message");

chatContainer.style.height = window.innerHeight + 'px';

const socket = io.connect(`https://obitoschat.herokuapp.com/`);

function joinSession() {
    if(alias.value === '') {
        label.innerHTML = '<b>Create an Alias!</b>';
    } else {
        login.style.display = 'none';
        chat.style.display = 'block';
        const userAlias = alias.value;
        socket.emit('join', `<i class="green">${userAlias}</i>`);
        socket.on('join', (data) => {
            screen.innerHTML += data + '<br>';
        });
    }
}

function checkKey(event) {
    if(event.keyCode === 13 && event.target.id === 'message') {
        messaging()
    } else if(event.keyCode === 13){
        joinSession();
    }
}

function messaging() {
    socket.emit('send', message.value);
    message.value = '';
}

socket.on('send', (message) => {
    screen.innerHTML += `<i class="purple">${message}</i><br>`;
});
