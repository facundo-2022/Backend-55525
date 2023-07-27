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

const express = require("express");

const app = express();

const PORT = 8080;

let visitas = 0;

app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor con Node y Express");
});

app.get("/visitas", (req, res) => {
  res.send(`La cantida de visitas es: ${visitas}`);
}); ///  en el localhost:8080/otra  nos va a mostrar el mensaje del contenido

app.get("fyh", (req, res) => {
  const now = new Date();
  const fyh = now.toLocaleString();
  res.json({ fyh });
}); //El asterisco es el selector universal. Quizás si aprendieron CSS lo habrán visto. Y nos va a servir también más adelante para solucionar problemas de CORS.

const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
