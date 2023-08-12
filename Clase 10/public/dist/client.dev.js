"use strict";

var _require = require("express"),
    text = _require.text;

var socket = io(); // instanciamos a socket.io

var boton = document.getElementById("boton");
boton.addEventListener("click", sendMessage); //Funcion para enviar un mensaje al servidor

function sendMessage() {
  var message = document.getElementById("messageInput").value;
  socket.emit("newMessage", message);
} //Funcion para mostrar los mensajes


function appendMessage(socketId, message) {
  var messageList = document.getElementById("messageList");
  var newMessage = document.createElement("p");
  newMessage.textContent = "".concat(socketId, ": ").concat(message);
  messageList.appendChild(newMessage); // Agregar el nuevo mensaje al messageList
} //Recibir los mensajes del servidor


socket.on("messageList", function (messages) {
  var messageList = document.getElementById("messageList");
  messageList.innerHTML = "";
  messages.forEach(function (message) {
    appendMessages(message.socketId, message.mensaje);
  });
}); //Recibir los mensajes del servidor

socket.on("newMessage", function (data) {
  appendMessage(data.socketId, data.message);
});