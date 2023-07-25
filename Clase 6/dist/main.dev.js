"use strict";

/*const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  let message;

  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 12) {
    message = "Buen dia";
  } else if (hour >= 12 && hour < 20) {
    message = "buenas tardes";
  } else {
    message = "Buenas Noches";
  }

  res.writeHead(200, { "content-type": "text/plain" });
  res.end(message);
});

const connect = server.listen(PORT, () => {
  console.log(
    "Servidor Http escuchando en el puerto ${connecterServer.address().port}"
  );
});
*/
// EJECUTAMOS EXPRESS

/*
const express = require("express");

const app = express();

const PORT = 8080;

//PATHS
app.get("/", (req, res) => {
  res.send("Mi primer endpoint");
});

app.get("/otra", (req, res) => {
  res.send("otra ruta");
}); ///  en el localhost:8080/otra  nos va a mostrar el mensaje del contenido

app.get("*", (req, res) => {
  res.send("Sin contenido");
}); //El asterisco es el selector universal. Quizás si aprendieron CSS lo habrán visto. Y nos va a servir también más adelante para solucionar problemas de CORS.

const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
*/
///DESAFIO GENERICO
//PATHS
var express = require("express");

var app = express();
var PORT = 8080;
var visitas = 0;
app.get("/", function (req, res) {
  res.send("Bienvenido a mi servidor con Node y Express");
});
app.get("/visitas", function (req, res) {
  res.send("La cantida de visitas es: ".concat(visitas));
}); ///  en el localhost:8080/otra  nos va a mostrar el mensaje del contenido

app.get("fyh", function (req, res) {
  var now = new Date();
  var fyh = now.toLocaleString();
  res.json({
    fyh: fyh
  });
}); //El asterisco es el selector universal. Quizás si aprendieron CSS lo habrán visto. Y nos va a servir también más adelante para solucionar problemas de CORS.

var server = app.listen(PORT, function () {
  console.log("Escuchando en el puerto ".concat(PORT));
});
server.on("error", function (error) {
  return console.log("Error en servidor ".concat(error));
});