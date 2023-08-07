"use strict";

var express = require("express");

var path = require("path");

var handlebars = require("express-handlebars");

var viewsRouter = require("./routes/views.router");

var app = express();
var PORT = 8080;
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express["static"](__dirname, +"/views"));
/*//Array de usuarios
const users = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    email: "jperez@gmail.com",
    telefono: 1234567890,
  },
  {
    nombre: "Ana",
    apellido: "Fernandez",
    edad: 28,
    email: "ana@gmail.com",
    telefono: 34567890,
  },
  {
    nombre: "Pedro",
    apellido: "Marmol",
    edad: 30,
    email: "pedro@gmail.com",
    telefono: 034211567,
  },
];
///configuracion del endpoint

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const userRandom = users[randomIndex];
  res.render("index", userRandom);
});*/

app.use("/", viewsRouter); //Desde aca me traigo todo lo que tenga el archivo views.router.js

app.listen(PORT, function () {
  console.log("server listening on port ".concat(PORT));
});