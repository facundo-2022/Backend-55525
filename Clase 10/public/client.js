const { text } = require("express");

const socket = io(); // instanciamos a socket.io

const boton = document.getElementById("boton");
boton.addEventListener("click", sendMessage);
//funcion para enviar un mensaje al servidor
function sendMessage() {
  const message = document.getElementById("messageInput").value;
  socket.emit("sendMessage", message);
}

//funcion para mostrar lños mensaje en pantalla en el cliente

function appendMessage(socketId, message) {
  const messageList = document.getElementsById("messageList");
  const newMessage = document.createElement("p");
  newMessage.textContent = `${socketId}: ${message}`;
  messageList.appendchild(newMessage);
}

socket.on("messageList", (message) => {
  const messageList = document.getElementById("messageList");

  messageList.innerHTML = "";
  messageList.forEach((message) => {
    appendMessage(msg.socketId, msg.mensaje);
  });
});

//Recibir los mensajes del servidor

socket.on("newMessage", (data) => {
  appendMessage(data.socketId, data.mensaje);
});
