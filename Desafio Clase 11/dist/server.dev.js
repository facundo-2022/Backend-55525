"use strict";

var express = require("express");

var http = require("http");

var socketIo = require("socket.io");

var path = require("path");

var _require = require("socket.io"),
    Server = _require.Server;

var handlebars = require("express-handlebars"); //const Swal = require("sweetalert2");


var _require2 = require("tls"),
    CLIENT_RENEG_LIMIT = _require2.CLIENT_RENEG_LIMIT;

var app = express();
var server = http.createServer(app);
var io = new Server(server); //configuracion de traer los documentos de nuestro directorio de views y publics

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars"); //el mieldword para express

app.use(express["static"](path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.render("index.hbs");
});
var users = {};
io.on("connection", function (socket) {
  console.log("Usuario conectado en el servidor");
  socketIo.on("new-user", function (username) {
    users[socketIo.id] = username;
    io.emit("userConnected", username);
  });
  socket.on("chatMessage", function (message) {
    var username = users[socket.id];
    io.emit("message", {
      username: username,
      message: message
    });
  });
  socket.on("disconnect", function () {
    var username = users[socket.id];
    delete users[socket.id];
    io.emit("userDisconnected", username);
  });
});
var PORT = process.env.PORT || 8080;
server.listen(PORT, function () {
  console.log("server running on ".concat(PORT));
});