//  WEBSOCKET
// A travez del protocolo websocket tiene la intencion de comunicar el servidor con el cliente.Servidor el la consola y el cliente la pantalla.

//

const express = require("express");
const { SocketAddress } = require("net");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

const PORT = 8080;

let messages = [];

app.use(express.static(path.join(__dirname, "/public")));
//app.set("view engine", "hbs"); //hbs es lo mismo que poner handlebars pero para que no te tire error debes instalar npm i hbs, configuracion de ruta del hbs
//app.set("views", path.join(__dirname, "/public")); // configuracion de la ruta de views, es donde vamos a consumir la informacion que se encuentra en la carpeta public

//rutas

/*app.get("/", (req, res) => {
  res.render("index", { title: "Aplicación Socket IO" }); // el objeto es title
});*/

//Configuraciones de Socket.io
/*io.on("connection", (socket) => {
  console.log("Un cliente se a conectado");

  //Escucha un evento personalisado llamado mensaje desde el cliente
  socket.on("mensaje", (data) => {
    console.log("Mensaje recibido", data); //este tambien recibe un callback como parametro a data.
    //emitir mensaje a todo los clientes conectados (incluido el remitente)
    io.emit("mensaje", data); //esto seria el remitente
  });

  //escucha un evento de desconexion
  socket.on("disconnect", () => {
    console.log("Un cliente se a desconectado");
  });
  //recive a connection y tambien recive un parametro => (socket) seria nuestro callback
});*/
// por otro lado tenemos que escuchar lo que envia el cliente y ver que nos envia.

//Configuracion de socket.io de la actividad de clase

io.on("connection", (socket) => {
  socket.emit("messageList", messages);
  console.log("Nuevo cliente conectado");

  socket.on("newMessage", (message) => {
    messages.push(message);
    io.emit("newMessage", { socketId: socket.id, mensaje: message });
  });
});

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
