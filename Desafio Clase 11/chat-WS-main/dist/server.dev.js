"use strict";

var express = require("express");

var http = require("http");

var socketIo = require("socket.io");

var path = require("path");

var _require = require("socket.io"),
    Server = _require.Server;

var handlebars = require("express-handlebars");

var Swal = require("sweetalert2");

var app = express();
var server = http.createServer(app);
var io = new Server(server);
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express["static"](path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.render("index.hbs");
});
var users = {};
io.on("connection", function (socket) {
  console.log("Un usuario se ha conectado");
  socket.on("newUser", function (username) {
    users[socket.id] = username;
    io.emit("userConnected", username);
  });
  socket.on("productoAgregado", function (producto) {
    var username = users[socket.id];
    io.emit("message", {
      username: username,
      product: product
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
  console.log("Server running on port ".concat(PORT));
});