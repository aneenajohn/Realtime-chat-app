// To make a connection between client and server
// io comes from script for socket
const socket = io.connect('http://localhost:4001');

// const message = document.getElementByClassName('message');
const message = document.querySelector('.message')
// const message2 = document.getElementByClassName('message');
const userName = document.querySelector('.user-name');
const sendBtn = document.querySelector('.send-button');
const output = document.querySelector('.output');

console.log(message);
// console.log(message2);
console.log(userName);
console.log(sendBtn);
console.log(output);

const msgValue = message.value;
// console.log(msgValue);

// Emit messages from client to the server
// emit events
sendBtn.addEventListener('click', function(){
    // first param is the name of the msg
    // second param is the msg that we pass via this socket name
    socket.emit('chat', {
        message: message.value,
        userName: userName.value
    })
    message.value = "";
})


// Listen to the data sent back from server
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.userName + '</strong>'+ data.message +'</p>'
})