"use strict";

var _require = require("express"),
    text = _require.text;

var socket = io(); // instanciamos a socket.io

var boton = document.getElementById("boton");
boton.addEventListener("click", sendMessage); //funcion para enviar un mensaje al servidor

function sendMessage() {
  var message = document.getElementById("messageInput").value;
  socket.emit("sendMessage", message);
} //funcion para mostrar lños mensaje en pantalla en el cliente


function appendMessage(socketId, message) {
  var messageList = document.getElementsById("messageList");
  var newMessage = document.createElement("p");
  newMessage.textContent = "".concat(socketId, ": ").concat(message);
  messageList.appendchild(newMessage);
}

socket.on("messageList", function (message) {
  var messageList = document.getElementById("messageList");
  messageList.innerHTML = "";
  messageList.forEach(function (message) {
    appendMessage(msg.socketId, msg.mensaje);
  });
}); //Recibir los mensajes del servidor

socket.on("newMessage", function (data) {
  appendMessage(data.socketId, data.mensaje);
});