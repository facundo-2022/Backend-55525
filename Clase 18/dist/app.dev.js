"use strict";

var express = require("express");
/* const cookieParser = require("cookie-parser");
const { request } = require("express"); */


var session = require("express-session");

var app = express();
var port = 8080; //implementacion del milware

/* app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("coderSecret")); */
//al momento de inicializar va a leer que esa cookie esta firmada y no la podemos alterar y debemos agregar en app.get("/setCookie") el signed: true

/* app.get("/setCookie", (req, res) => {
  res
    .cookie("coderCokie", "Cookie en mi navegador", {
      maxAge: 10000,
      signed: true,
    })
    .send("Cookie"); //tiene clave- valor, la clave seria coder y el valor cookie en mi navegador. el maxAge es un numero que hace referencia a la cantidad de miliseg que va a ser valida esta cookie.
}); // con el signed:true me aseguro de que la cookie este firmada.

app.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/deleteCookie", (req, res) => {
  res.clearCookie("coderCokie").send("Cookie eliminada");
}); */

/* app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/setCookie", (req, res) => {
  const { user } = req.body;
  res.cookie("user", user, { maxAge: 50000 }).send("cookie creado");
});

app.get("/getCookie", (req, res) => {
  const userCookie = req.cookies.user;
  console.log("My cookie", userCookie);

  res.send("Cookie Mostrar en consola");
});
 */
// parte de session

app.use(session({
  secret: "secretCoder",
  resave: true,
  //resave te permite mantener sesiones activas en caso de que la session no se alla finalizado la session.
  saveUninitialized: true // te permite guardar session aunque no tenga informacion o contenido.

}));
app.get("/session", function (req, res) {
  if (req.session.counter) {
    req.session.counter++;
    res.send("Cantidad de visitas: ".concat(req.session.counter));
  } else {
    req.session.counter = 1;
    res.send("Mensaje de Bienvenida"); // si no hay inicializacion de usuarios arrancan en uno.
  }
});
app.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    if (!err) res.send("Logout");else res.send("Error al intentar salir");
  });
});
app.get("/login", function (req, res) {
  var _req$query = req.query,
      username = _req$query.username,
      password = _req$query.password;

  if (username !== "felipe" || password !== "felipem") {
    return res.send("Nombre de usuario o contraseña invalida");
  }

  req.session.user = username;
  req.session.admin = true, //si vemos admin en true le damos todo los privilegio a este usuario.
  res.send("Acceso Satisfactorio");
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});