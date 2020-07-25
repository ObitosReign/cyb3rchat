const io = require('socket.io-client');

const chatContainer = document.getElementById("chat-container");
const alias = document.getElementById("alias");
const label = document.getElementById("label");
const login = document.getElementById("login");
const chat = document.getElementById("chat");
const screen = document.getElementById("screen");

chatContainer.style.height = window.innerHeight + 'px';

function joinChat() {
    if(alias.value === '') {
        label.innerHTML = '<b>Please create an alias!!!</b>';
    } else {
        login.style.display = 'none';
        chat.style.display = 'block';
        
        const joinSession = () =>{
            const socket = io.connect(`https://obitoschat.herokuapp.com/`);
            const alias = document.getElementById('alias').value
            socket.emit('join', alias);
            socket.on('join', (data) => {
                document.getElementById('screen').innerHTML = data;
            });
        }
    }
}