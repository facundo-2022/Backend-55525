"use strict";

//  WEBSOCKET
// A travez del protocolo websocket tiene la intencion de comunicar el servidor con el cliente.Servidor el la consola y el cliente la pantalla.
//
var express = require("express");

var app = express();

var http = require("http").createServer(app);

var io = require("socket.io")(http);

var path = require("path");

var PORT = 8080;
app.set("view engine", "hbs"); //hbs es lo mismo que poner handlebars pero para que no te tire error debes instalar npm i hbs, configuracion de ruta del hbs

app.set("views", path.join(__dirname, "views")); // configuracion de la ruta de views
//rutas

app.get("/", function (req, res) {
  res.render("index", {
    title: "Aplicación Socket IO"
  }); // el objeto es title
});
http.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
}); //Configuraciones de Socket.io

io.on("connection", function (socket) {
  console.log("Un cliente se a conectado"); //Escucha un evento personalisado llamado mensaje desde el cliente

  socket.on("mensaje", function (data) {
    console.log("Mensaje recibido", data); //este tambien recibe un callback como parametro a data.
    //emitir mensaje a todo los clientes conectados (incluido el remitente)

    io.emit("mensaje", data); //esto seria el remitente
  }); //escucha un evento de desconexion

  socket.on("disconnect", function () {
    console.log("Un cliente se a desconectado");
  }); //recive a connection y tambien recive un parametro => (socket) seria nuestro callback
}); // por otro lado tenemos que escuchar lo que envia el cliente y ver que nos envia.