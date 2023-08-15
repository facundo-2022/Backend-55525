const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const { Server } = require("socket.io");
const handlebars = require("express-handlebars");
//const Swal = require("sweetalert2");
const { CLIENT_RENEG_LIMIT } = require("tls");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//configuracion de traer los documentos de nuestro directorio de views y publics
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
//el mieldword para express
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.hbs");
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
