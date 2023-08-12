const { text } = require("express");

const socket = io(); // instanciamos a socket.io

const boton = document.getElementById("boton");
boton.addEventListener("click", sendMessage);
//Funcion para enviar un mensaje al servidor
function sendMessage() {
  const message = document.getElementById("messageInput").value;
  socket.emit("newMessage", message);
}

//Funcion para mostrar los mensajes
function appendMessage(socketId, message) {
  const messageList = document.getElementById("messageList");
  const newMessage = document.createElement("p");
  newMessage.textContent = `${socketId}: ${message}`;
  messageList.appendChild(newMessage); // Agregar el nuevo mensaje al messageList
}

//Recibir los mensajes del servidor
socket.on("messageList", (messages) => {
  const messageList = document.getElementById("messageList");
  messageList.innerHTML = "";
  messages.forEach((message) => {
    appendMessages(message.socketId, message.mensaje);
  });
});

//Recibir los mensajes del servidor
socket.on("newMessage", (data) => {
  appendMessage(data.socketId, data.message);
});
