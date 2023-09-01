"use strict";

var express = require("express");

var mongoose = require("mongoose");

var userRouter = require("./routes/users.router.js");

var app = express();
var port = 8080;
app.listen(port, function () {
  console.log("Serving is running on port ".concat(port));
});
app.use(express.json()); //Enlace de conexion con mongoose atlas

mongoose.connect("").then(function () {
  console.log("Conectado a la BD de Mongo Atlas");
})["catch"](function (error) {
  return console.error("Error en la conexion");
}); //esto es lo que vamos a consumir de routes

app.use("/api/colegio", userRouter);